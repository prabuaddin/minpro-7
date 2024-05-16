import { Router } from "express";
import { registerParticipantsUserAccount } from "@/controllers/participants.controller";
import { ValidatorParticipantsRegister } from "@/middleware/ParticipantsRegisterValidator";
import { handleErrorRegisterValidator } from "@/middleware/HandleErrorRegisterValidator";

const router = Router()

router.post('/register', ValidatorParticipantsRegister, handleErrorRegisterValidator, registerParticipantsUserAccount)

export default router