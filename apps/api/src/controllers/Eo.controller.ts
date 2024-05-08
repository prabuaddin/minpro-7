import { Request, Response, NextFunction } from "express";
import { newEoAccount } from "@/services/EoUserServices";
import { HashPassword } from "@/helpers/Hashing";

export async function registerEoUserAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password, username, inputRef } = req.body
        const hashedPassword = await HashPassword({ password })

        const createUser = await newEoAccount({
            email, password: hashedPassword, username, inputRef
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