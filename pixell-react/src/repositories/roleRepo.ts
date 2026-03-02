import type { Role } from "../types/Roles";
import { roles as initialRoles } from "../data/roles";

let roles: Role[] = [...initialRoles];

export const roleRepo = {

  getRoles: (): Role[] => {
    return roles;
  },

  createRole: (firstName: string, lastName: string, roleName: string): Role[] => {

    roles.push({
      firstName,
      lastName,
      role: roleName
    });

    return roles;
  }

};