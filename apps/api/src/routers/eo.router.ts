import { Router } from "express";
import { registerEoUserAccount } from "@/controllers/Eo.controller";
import { ValidatorEoRegister } from "@/middleware/EoRegisterValidator";
import { handleErrorRegisterValidator } from "@/middleware/HandleErrorRegisterValidator";
import { createAddEvent, getEvent } from "@/controllers/Eo.controller";
import { uploader } from "@/middleware/Uploader";
import { tokenVerify } from "@/helpers/Token";
import { roleVerifyEo } from "@/middleware/RoleVerify";

const router = Router()

router.post('/register', ValidatorEoRegister, handleErrorRegisterValidator, registerEoUserAccount)
router.post('/event', uploader, createAddEvent)
router.get('/events', getEvent)



export default router