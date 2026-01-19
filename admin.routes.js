import { Router } from "express";
import { authGuard } from "../middlewares/auth.middleware.js";
import { adminGuard } from "../middlewares/admin.middleware.js";
import {
  getUsers,
  updateUserRole,
  getSubscriptions
} from "../controllers/admin.controller.js";

const router = Router();

router.get("/users", authGuard, adminGuard, getUsers);
router.patch("/users/:id/role", authGuard, adminGuard, updateUserRole);
router.get("/subscriptions", authGuard, adminGuard, getSubscriptions);

export default router;