import { prisma } from "@/connection";
import { IUser } from "./type";
import { ReferralCodes } from "@/helpers/RefCode";
import { addMonths } from "date-fns";

export const newParticipantsAccount = async ({ email, username, password, inputRef }: IUser) => {
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

        // // CREATE NEW USER
        const createUser = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: password,
                role: {
                    connect: {
                        id: 1
                    }
                },
                inputRef: inputRef,
                referralNum: referralCodes
            }
        })

        if (inputRef) {

            // CREATE NEW USER DISCOUNT
            await prisma.discountVoucher.create({
                data: {
                    value: 0.1,
                    user: {
                        connect: {
                            uid: createUser.uid
                        }
                    },
                    expiredDate: addMonths(new Date(), 3)
                }
            })

            //  FIND USER USED REFCODE UID
            const findUserUsedReferralCode = await prisma.user.findMany({
                where: {
                    referralNum: {
                        equals: inputRef
                    }
                }
            })


            // CREATE USER USED REFCODE POINT
            if (findUserUsedReferralCode.length > 0) {
                await prisma.points.create({
                    data: {
                        balance: 10000,
                        user: {
                            connect: {
                                uid: findUserUsedReferralCode[0].uid
                            }
                        },
                        expiredDate: addMonths(new Date(), 3)
                    }
                })
            } else if (findUserUsedReferralCode.length <= 0) {
                throw new Error('Referral Code is invalid!')
            }
        }
    })
}

export const findRoleServices = async () => {
    return await prisma.role.findMany()
}