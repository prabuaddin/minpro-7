import { Router } from "express";
import { registerEoUserAccount } from "@/controllers/Eo.controller";
import { ValidatorEoRegister } from "@/middleware/EoRegisterValidator";
import { handleErrorRegisterValidator } from "@/middleware/HandleErrorRegisterValidator";

const router = Router()

router.post('/register', ValidatorEoRegister, handleErrorRegisterValidator, registerEoUserAccount)

export default router