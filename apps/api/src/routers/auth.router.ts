import { Router } from "express";
import { loginEo, loginParticipants, UpdateUserAccount } from "@/controllers/auth.controller";
import { tokenVerify } from "@/helpers/Token";
import { UserUpdateValidator } from "@/middleware/UserUpdateValidator";
import { handleErrorRegisterValidator } from "@/middleware/HandleErrorRegisterValidator";

const router = Router()

router.post('/event-organizer/login', loginEo)
router.post('/participants/login', loginParticipants)
router.put('/profile', tokenVerify, UserUpdateValidator, handleErrorRegisterValidator, UpdateUserAccount)


export default router