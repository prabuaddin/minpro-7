import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config()

export const createToken = ({ uid }: { uid: string }) => {
    return jwt.sign({ uid }, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '1h'
    })
}