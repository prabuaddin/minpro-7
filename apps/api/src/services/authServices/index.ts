import { prisma } from "@/connection";
import { IFindEmployeeByEmailParams } from "./types";

export const findLoginUserEo = async ({ email }: IFindEmployeeByEmailParams) => {
    const findLoginUser = await prisma.user.findFirst({
        where: {
            email: email,
            roleId: 2
        },
        include: {
            discontVoucher: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    },
                }
            },
            points: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    },
                    isUsed: false
                }
            }
        }
    })

    if (!findLoginUser) throw new Error('User Not Found!')

    let totalPoints = findLoginUser?.points.reduce((acc, curr) => acc + curr.balance, 0);

    return await prisma.user.update({
        where: {
            uid: findLoginUser.uid
        },
        data: {
            pointsBalance: totalPoints
        },
        include: {
            discontVoucher: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    },
                    isUsed: false
                }
            },
            points: {
                where: {
                    expiredDate: {
                        gte: new Date(),
                    },
                    isUsed: false
                }
            }
        }

    })

}

export const findLoginUserParticipants = async ({ email }: IFindEmployeeByEmailParams) => {
    const findLoginUser = await prisma.user.findFirst({
        where: {
            email: email,
            roleId: 1
        },
        include: {
            discontVoucher: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    }
                }
            },
            points: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    },
                    isUsed: false
                }
            }
        }
    })

    if (!findLoginUser) throw new Error('User Not Found!')

    let totalPoints = findLoginUser?.points.reduce((acc, curr) => acc + curr.balance, 0);

    return await prisma.user.update({
        where: {
            uid: findLoginUser.uid
        },
        data: {
            pointsBalance: totalPoints
        },
        include: {
            discontVoucher: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    },
                    isUsed: false
                }
            },
            points: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    },
                    isUsed: false
                }
            }
        }

    })

}

export const findUserById = async ({ uid }: { uid: any }) => {
    return await prisma.user.findUnique({
        where: {
            uid: uid
        },
        include: {
            role: true
        }
    })
}

export const updateAccount = async ({ uid, email, username }: any) => {
    return await prisma.$transaction(async (prisma) => {
        const findDuplicateEmail = await prisma.user.findMany({
            where: {
                NOT: {
                    uid: uid
                },
                AND: {
                    email: email
                }
            }
        })
        if (findDuplicateEmail.length) throw new Error('Email Already Registered!')

        const findDuplicateUsername = await prisma.user.findMany({
            where: {
                NOT: {
                    uid: uid
                },
                AND: {
                    username: username
                }
            }
        })
        if (findDuplicateUsername.length) throw new Error('Username Already Registered!')

        const findUserToUpdate = await prisma.user.findUnique({
            where: {
                uid: uid
            }
        })

        const updatedUser = await prisma.user.update({
            where: {
                uid: findUserToUpdate?.uid
            },
            data: {
                email: email,
                username: username
            }
        })

        return await prisma.user.findUnique({
            where: {
                uid: uid
            },
            include: {
                discontVoucher: {
                    where: {
                        expiredDate: {
                            gte: new Date()
                        },
                        isUsed: false
                    }
                },
                points: {
                    where: {
                        expiredDate: {
                            gte: new Date()
                        },
                        isUsed: false
                    }
                }
            }
        })
    })
}