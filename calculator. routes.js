import { Router } from "express";
import { authGuard } from "../middlewares/auth.middleware.js";
import { molarMassCalc } from "../controllers/calculator.controller.js";

const router = Router();

router.post("/molar-mass", authGuard, molarMassCalc);

export default router;