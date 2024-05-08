import { Request, Response, NextFunction } from "express";
import { createEvent, findEvent } from "@/services/EOService";

export const createAddEvent = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, image, startDate, endDate, locationId, time, description, categoryId, userId } = req.body

        await createEvent({
            name,
            image,
            startDate,
            endDate,
            locationId,
            time,
            description,
            categoryId, 
            userId
        })
        
        res.status(201).send({
            error: false,
            message: 'Create Event Success',
            data: null
        })
    } catch (error) {
        next(error)
    }
}

export const getEvent = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
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