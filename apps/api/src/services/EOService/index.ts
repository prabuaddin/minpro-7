import { prisma } from "../../connection";
import { ICreateEvent } from "./types";

export const createEvent = async({name, image, startDate, endDate, locationId, time, description, categoryId, userId }: ICreateEvent) => {
    return await prisma.event.create({
        data: {
            name, image, startDate, endDate, time, locationId, description, categoryId, userId
        }
    })
}

export const findEvent = async() => {
    return await prisma.event.findMany()
}