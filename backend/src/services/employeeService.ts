import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {
  async createEmployee(firstName: string, lastName: string, department: string) {
    if (firstName.length < 3) {
      throw new Error("First name must be at least 3 characters");
    }
    return await employeeRepository.addEmployee(firstName, lastName, department);
  },

  async getDepartments() {
    return await employeeRepository.getDepartments();
  }
};