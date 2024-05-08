import { prisma } from "@/connection";
import { IUser } from '../../services/ParticipantsUserServices/type'
import { ReferralCodes } from "@/helpers/RefCode";

export const newEoAccount = async ({ email, password, username, inputRef }: IUser) => {
    const referralCodes = await ReferralCodes({ username })
    return await prisma.$transaction(async (prisma) => {
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