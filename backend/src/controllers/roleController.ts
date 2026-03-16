import { Request, Response } from "express";
import { roleService } from "../services/roleService";

export const roleController = {

  getRoles(req: Request, res: Response) {
    const roles = roleService.getRoles();
    res.json(roles);
  },

  createRole(req: Request, res: Response) {

    const { firstName, lastName, role } = req.body;

    const updatedRoles = roleService.createRole(
      firstName,
      lastName,
      role
    );

    res.json(updatedRoles);
  }

};