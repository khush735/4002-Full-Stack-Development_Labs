import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {

  createEmployee(firstName: string, lastName: string, department: string) {

    if (firstName.length < 3) {
      throw new Error("First name must be at least 3 characters");
    }

    const result = employeeRepository.addEmployee(firstName, lastName, department);

    if (!result) {
      throw new Error("Department does not exist");
    }

    return result;
  },

  getDepartments() {
    return employeeRepository.getDepartments();
  }

};