import { Request, Response, NextFunction } from "express";
import { newParticipantsAccount } from "@/services/ParticipantsUserServices";
import { HashPassword } from "@/helpers/Hashing";

export async function registerParticipantsUserAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, username, password, inputRef } = req.body
        const hashedPassword = await HashPassword({ password })

        const createUser = await newParticipantsAccount({
            email, username, password: hashedPassword, inputRef
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

