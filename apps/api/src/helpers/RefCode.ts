export async function ReferralCodes({ username }: { username: string }) {
    const prefixCode = username.split('', 3).join('').toUpperCase()
    const referralCodes = prefixCode + Math.ceil(Math.random() * 10000)

    return referralCodes
}