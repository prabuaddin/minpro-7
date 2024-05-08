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
                    }
                }
            },
            points: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    }
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
                    }
                }
            },
            points: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    }
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
                    }
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
                    }
                }
            },
            points: {
                where: {
                    expiredDate: {
                        gte: new Date()
                    }
                }
            }
        }

    })

}