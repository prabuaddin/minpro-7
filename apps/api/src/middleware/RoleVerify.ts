import { findUserById } from "@/services/authServices";
import { NextFunction, Request, Response } from "express";

interface IReqPayload extends Request {
    payload: any
}

export const roleVerifyEo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reqPayload = req as IReqPayload
        const payload = reqPayload.payload

        const findUserByIdResult = await findUserById({ uid: payload.uid })
        if (!findUserByIdResult) throw new Error('User Not Found!')

        const authorized = ['eventOrganizer']
        if (authorized.includes(findUserByIdResult?.role?.role)) {
            next()
        } else {
            throw new Error('User Unauthorized!')
        }
    } catch (error) {
        next(error)
    }
}