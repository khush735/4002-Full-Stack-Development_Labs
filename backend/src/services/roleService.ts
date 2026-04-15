import { roleRepo } from "../repositories/roleRepo";

export const roleService = {
  async getRoles() {
    return await roleRepo.getRoles();
  },

  async createRole(firstName: string, lastName: string, role: string) {
    if (firstName.length < 3) {
      throw new Error("First name must be at least 3 characters");
    }
    return await roleRepo.createRole(firstName, lastName, role);
  }
};