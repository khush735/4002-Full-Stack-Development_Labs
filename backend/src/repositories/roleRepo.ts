import { roles } from "../data/roles";

export const roleRepo = {

  getRoles() {
    return roles;
  },

  createRole(firstName: string, lastName: string, role: string) {

    roles.push({
      firstName,
      lastName,
      role
    });

    return roles;
  }

};