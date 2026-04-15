import prisma from '../../prisma/prisma';

export const employeeRepository = {
  async getDepartments() {
    return await prisma.department.findMany({
      include: {
        employees: true
      }
    });
  },

  async addEmployee(firstName: string, lastName: string, departmentName: string) {
    const dept = await prisma.department.findUnique({
      where: { name: departmentName }
    });

    if (!dept) throw new Error("Department not found");

    await prisma.employee.create({
      data: {
        firstName,
        lastName,
        departmentId: dept.id
      }
    });

    return await prisma.department.findMany({
      include: { employees: true }
    });
  }
};