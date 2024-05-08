
import express, { Router } from 'express'
import participantsRouter from './participants.router';
import authRouter from './auth.router'
import EventOrganizerRouter from './EventOrganizerRouter'
import eoRouter from './eo.router'

const router = Router()

router.use(express.json())

router.use('/participants', participantsRouter)
router.use('/auth', authRouter)
router.use('/event-organizer', eoRouter)
router.use('/eventorganizer', EventOrganizerRouter)


export default router

