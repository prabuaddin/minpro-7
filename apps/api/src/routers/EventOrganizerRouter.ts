import { Router } from "express";
import { createAddEvent, getEvent } from "@/controllers/EventOrganizerController";

const router = Router()
router.post('/event', createAddEvent)
router.get('/events', getEvent )

export default router