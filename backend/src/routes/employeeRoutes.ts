import { Router } from "express";
import { employeeController } from "../controllers/employeeController";

const router = Router();

// Public route
router.get("/departments", employeeController.getDepartments);

// Protected route - requires authentication
router.post("/employees", employeeController.addEmployee);

export default router;