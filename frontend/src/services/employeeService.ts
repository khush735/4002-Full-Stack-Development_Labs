import { employeeRepo } from "../repositories/employeeRepo";
import type { Department } from "../types/Employee";

export const employeeService = {
  async createEmployee(
    firstName: string,
    lastName: string,
    departmentName: string,
    token: string
  ): Promise<{ success: true; data: Department[] } | { success: false; message: string }> {
    const departments = await employeeRepo.getDepartments();

    const departmentExists = departments.some(
      (dept: Department) => dept.name === departmentName
    );

    if (!departmentExists) {
      return { success: false, message: "Department does not exist." };
    }

    if (firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." };
    }

    const updatedDepartments = await employeeRepo.createEmployee(firstName, lastName, departmentName, token);

    return { success: true, data: updatedDepartments };
  }
};
