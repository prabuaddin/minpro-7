import express, { Router } from 'express';
import userRouter from './user.router';

const router = Router()

router.use(express.json())

router.use('/user', userRouter)

export default router

