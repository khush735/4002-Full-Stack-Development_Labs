import { roleRepo } from "../repositories/roleRepo";

export const roleService = {

  getRoles() {
    return roleRepo.getRoles();
  },

  createRole(firstName: string, lastName: string, role: string) {

    if (firstName.length < 3) {
      throw new Error("First name must be at least 3 characters");
    }

    return roleRepo.createRole(firstName, lastName, role);
  }

};