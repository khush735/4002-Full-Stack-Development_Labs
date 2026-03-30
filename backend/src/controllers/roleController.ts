import { Request, Response } from "express";
import { roleService } from "../services/roleService";

export const roleController = {
  async getRoles(req: Request, res: Response) {
    try {
      const roles = await roleService.getRoles();
      res.json(roles);
    } catch (error) {
      console.error("Error in getRoles:", error);
      res.status(500).json({ error: "Failed to fetch roles" });
    }
  },

  async createRole(req: Request, res: Response) {
    try {
      const { firstName, lastName, role } = req.body;
      const updatedRoles = await roleService.createRole(firstName, lastName, role);
      res.json(updatedRoles);
    } catch (error: any) {
      console.error("Error in createRole:", error);
      res.status(400).json({ message: error.message });
    }
  }
};