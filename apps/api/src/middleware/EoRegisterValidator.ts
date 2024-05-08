import { body } from "express-validator";

export const ValidatorEoRegister = [
    body(['email', 'username', 'password']).notEmpty().withMessage('Data Must Complete'),
    body('email').isString().isEmail().withMessage('Email Must Valid!'),
    body('password').isString().isLength({ min: 5, max: 15 }).withMessage('Password have minimum character 5 and maximum 15'),
]