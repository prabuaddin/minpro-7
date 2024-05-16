import { body } from "express-validator";

export const UserUpdateValidator = [
    body('email').isString().isEmail().withMessage('Email Must Valid!'),

]