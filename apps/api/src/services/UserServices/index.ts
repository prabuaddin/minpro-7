import { prisma } from "@/connection";
import { IUser } from "./type";
import { ReferralCodes } from "@/helpers/RefCode";
import { addMonths } from "date-fns";

export const newUserAccount = async ({ email, username, password, roleId, inputRef }: IUser) => {
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
        if (findDuplicateUsername.length) throw new Error('Username Already Refistered!')

        // // CREATE NEW USER
        const createUser = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: password,
                role: {
                    connect: {
                        id: roleId
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
            if (findUserUsedReferralCode) {
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
            }

            // // TOTAL POINTS USER USED REFCODE
            // let findPoints = await prisma.user.findUnique({
            //     where: {
            //         uid: findUserUsedReferralCode[0].uid,
            //     },
            //     include: {
            //         points: {
            //             where: {
            //                 expiredDate: {
            //                     gte: new Date()
            //                 }
            //             }
            //         }
            //     },

            // })

            // let totalPoints = findPoints?.points.reduce((acc, curr) => acc + curr.balance, 0);

            // // UPDATE USER USED POINT BALANCE
            // await prisma.user.update({
            //     where: {
            //         uid: findUserUsedReferralCode[0].uid
            //     },
            //     data: {
            //         pointsBalance: totalPoints
            //     }
            // })
        }
    })


}