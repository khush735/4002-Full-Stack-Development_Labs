import { Router } from "express";
import { employeeController } from "../controllers/employeeController";

const router = Router();

router.get("/departments", employeeController.getDepartments);
router.post("/employees", employeeController.addEmployee);

export default router;