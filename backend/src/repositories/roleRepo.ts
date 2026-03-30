import prisma from '../../prisma/prisma';

export const roleRepo = {
  async getRoles() {
    return await prisma.role.findMany();
  },

  async createRole(firstName: string, lastName: string, role: string) {
    await prisma.role.create({
      data: { firstName, lastName, role }
    });
    return await prisma.role.findMany();
  }
};