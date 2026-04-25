import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { roleController } from "../controllers/roleController";

const router = Router();

// Public
router.get("/roles", roleController.getRoles);

// PROTECTED
router.post(
  "/roles",
  requireAuth(),
  roleController.createRole
);

export default router;