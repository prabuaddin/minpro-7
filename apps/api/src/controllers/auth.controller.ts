import { NextFunction, Request, Response } from 'express';
import { findLoginUserEo, findLoginUserParticipants, updateAccount } from '@/services/authServices';
import { createToken } from '@/helpers/Token';
import { comparePassword } from '@/helpers/Hashing';
import { IReqAccessToken } from '@/helpers/Token';

export async function loginEo(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body

        const findLoginUserResult = await findLoginUserEo({ email })

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

export async function loginParticipants(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body

        const findLoginUserResult = await findLoginUserParticipants({ email })

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

export async function UpdateUserAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const reqToken = req as IReqAccessToken
        const { uid } = reqToken.payload
        const { email, username } = req.body

        const UpdateProfile = await updateAccount({ uid, email, username })

        res.status(201).send({
            error: false,
            message: "User updated!",
            data: {
                user: UpdateProfile
            }
        })
    } catch (error) {
        next(error)
    }
}