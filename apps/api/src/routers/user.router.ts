import { Router } from "express";
import { registerUserAccount } from "@/controllers/user.controller";

const router = Router()

router.post('/register', registerUserAccount)

export default router