import express, { Router } from 'express'

const router = Router()
router.use(express.json())

import EventOrganizerRouter from './EventOrganizerRouter'

router.use('/eventorganizer', EventOrganizerRouter)

export default router