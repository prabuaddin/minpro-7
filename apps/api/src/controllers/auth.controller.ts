import { NextFunction, Request, Response } from 'express';
import { findLoginUser } from '@/services/authServices';
import { createToken } from '@/helpers/Token';
import { comparePassword } from '@/helpers/Hashing';

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body

        const findLoginUserResult = await findLoginUser({ email })

        const comparePasswordResult = await comparePassword({ passwordFromClient: password, passwordFromDb: findLoginUserResult.password })
        if (!comparePasswordResult) throw new Error('Password Is Incorrect!')

        const accessToken = await createToken({ uid: findLoginUserResult.uid })

        res.status(201).send({
            error: false,
            message: "Login Success!",
            data: {
                accessToken: accessToken,
                user: findLoginUserResult
            }
        })

    } catch (error) {
        next(error)
    }
}