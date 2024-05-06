import { Request, Response, NextFunction } from "express";
import { newUserAccount } from "@/services/UserServices";

export async function createUserAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, username, password, roleId, inputRef } = req.body

        await newUserAccount({ email, username, password, roleId, inputRef })

        res.status(201).send({
            error: false,
            message: "Create User Success!",
            data: null
        })
    } catch (error) {
        next(error)
    }
}

