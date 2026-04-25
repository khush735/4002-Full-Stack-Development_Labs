import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { employeeController } from "../controllers/employeeController";

const router = Router();

// Public
router.get("/departments", employeeController.getDepartments);

// PROTECTED
router.post(
  "/employees",
  requireAuth(),
  employeeController.addEmployee
);

export default router;