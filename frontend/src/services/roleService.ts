import { roleRepo } from "../repositories/roleRepo";
import type { Role } from "../types/Roles";

export const roleService = {
  async createRole(firstName: string, lastName: string, roleName: string): Promise<{ success: true; data: Role[] } | { success: false; message: string }> {
    if (firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." };
    }

    const existingRoles = await roleRepo.getRoles();

    const roleExists = existingRoles.some((r: Role) => r.role === roleName);

    if (roleExists) {
      return { success: false, message: "This role is already occupied." };
    }

    const updated = await roleRepo.createRole(firstName, lastName, roleName);

    return { success: true, data: updated };
  }
};
