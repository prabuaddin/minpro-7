import { Request, Response, NextFunction } from "express";
import { newEoAccount, } from "@/services/EoUserServices";
import { HashPassword } from "@/helpers/Hashing";
import { createEvent, findEvent } from "@/services/EoUserServices";

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

export const createAddEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // const { name, eventOrganizer, imageId, startDate, endDate, startTime, endTime, city, address, description, availableSeat, price, categoryId } = req.body
        // console.log(req.files)
        // await createEvent({
        //     name,
        //     eventOrganizer,
        //     imageId,
        //     startDate,
        //     endDate,
        //     startTime,
        //     endTime,
        //     city,
        //     address,
        //     description,
        //     availableSeat,
        //     price,
        //     categoryId, 
        // })

        const data = JSON.parse(req.body.data)
        console.log(data)

        if (req.files) {
            const uploadedFiles = Array.isArray(req.files) ? req.files : req.files['images'];
            await createEvent(data, uploadedFiles)
        }

        res.status(201).send({
            error: false,
            message: 'Create Event Success',
            data: null
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const getEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const findEvents = await findEvent()

        res.status(200).send({
            error: false,
            message: 'Get Event Success!',
            data: findEvents
        })
    } catch (error) {
        next(error)
    }
}
