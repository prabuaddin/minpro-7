import { Router } from "express";
import { createUserAccount } from "@/controllers/user.controller";

const router = Router()

router.post('/', createUserAccount)

export default router