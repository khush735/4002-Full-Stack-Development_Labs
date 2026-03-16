import { roleRepo } from "../repositories/roleRepo";

export const roleService = {

  createRole(firstName: string, lastName: string, roleName: string) {

    if (firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." };
    }

    const existingRoles = roleRepo.getRoles();

    const roleExists = existingRoles.some(r => r.role === roleName);

    if (roleExists) {
      return { success: false, message: "This role is already occupied." };
    }

    const updated = roleRepo.createRole(firstName, lastName, roleName);

    return { success: true, data: updated };
  }

};