import { Router } from "express";
import { loginEo, loginParticipants } from "@/controllers/auth.controller";

const router = Router()

router.post('/event-organizer/login', loginEo)
router.post('/participants/login', loginParticipants)

export default router