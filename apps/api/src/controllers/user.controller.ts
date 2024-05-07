import { Request, Response, NextFunction } from "express";
import { newUserAccount } from "@/services/UserServices";
import { HashPassword } from "@/helpers/Hashing";

export async function registerUserAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, username, password, roleId, inputRef } = req.body
        const hashedPassword = await HashPassword({ password })

        const createUser = await newUserAccount({
            email, username, password: hashedPassword, roleId, inputRef
        })

        res.status(201).send({
            error: false,
            message: "Create User Success!",
            data: null
        })
    } catch (error) {
        next(error)
    }
}

