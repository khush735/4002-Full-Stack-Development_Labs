import type { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const employeeController = {

  getDepartments(req: Request, res: Response) {
    const data = employeeService.getDepartments();
    res.json(data);
  },

  addEmployee(req: Request, res: Response) {

    try {
      const { firstName, lastName, department } = req.body;

      const data = employeeService.createEmployee(firstName, lastName, department);

      res.json(data);

    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }

  }

};