import type { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const employeeController = {
  async getDepartments(req: Request, res: Response) {
    try {
      const data = await employeeService.getDepartments();
      res.json(data);
    } catch (error) {
      console.error("Error in getDepartments:", error);
      res.status(500).json({ error: "Failed to fetch departments" });
    }
  },

  async addEmployee(req: Request, res: Response) {
    try {
      const { firstName, lastName, department } = req.body;
      const data = await employeeService.createEmployee(firstName, lastName, department);
      res.json(data);
    } catch (error: any) {
      console.error("Error in addEmployee:", error);
      res.status(400).json({ message: error.message });
    }
  }
};