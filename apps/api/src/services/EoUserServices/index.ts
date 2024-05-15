import { prisma } from "@/connection";
import { IUser } from '../../services/ParticipantsUserServices/type'
import { ReferralCodes } from "@/helpers/RefCode";
import { ICreateEvent } from "./types";

export const newEoAccount = async ({ email, password, username, inputRef }: IUser) => {
    const referralCodes = await ReferralCodes({ username })
    return await prisma.$transaction(async (prisma: any) => {
        // // VALIDATOR
        const findDuplicateEmail = await prisma.user.findMany({
            where: {
                email: email
            }
        })
        if (findDuplicateEmail.length) throw new Error('Email Already Registered!')

        const findDuplicateUsername = await prisma.user.findMany({
            where: {
                username: username
            }
        })
        if (findDuplicateUsername.length) throw new Error('Username Already Registered!')

        // CREATE NEW USER
        await prisma.user.create({
            data: {
                email: email,
                password: password,
                username: username,
                role: {
                    connect: {
                        id: 2
                    }
                },
                inputRef: '',
                referralNum: referralCodes
            }
        })
    })

}


// export const createEvent = async({name, eventOrganizer, imageId, startDate, endDate, startTime, endTime, city, address, description, availableSeat, price, categoryId}: ICreateEvent) => {
//     return await prisma.event.create({
//         data: {
//             name, eventOrganizer, imageId, startDate, endDate, startTime, endTime, city, address, description, availableSeat, price, categoryId
//         }
//     })
// }

export const createEvent = async(data: any, images: any) => {
    return await prisma.$transaction(async(tx) => {
        const createdEvent = await tx.event.create({
            data: {
                name: data.name,
                eventOrganizer: data.eventOrganizer,
                startDate: new Date(data.startDate),
                endDate: new Date(data.endDate),
                startTime: new Date(`${data.startDate.split('T')[0]}T${data.startTime}:00`),
                endTime: new Date(`${data.endDate.split('T')[0]}T${data.endTime}:00`),
                city: data.city,
                address: data.address,
                description: data.description,
                availableSeat: parseInt(data.availableSeat),
                price: parseInt(data.price),
                eventType: data.eventType,
                categoryId: parseInt(data.categoryId)
            }
        })

        const imagesToCreate: any = []
        images.forEach((item: any) => {
            imagesToCreate.push({
                url: item.path,
                eventId: createdEvent.id
            })
        })

        await tx.image.createMany({
            data: [...imagesToCreate]
        })
    })
}

export const findEvent = async() => {
    return await prisma.event.findMany()
}