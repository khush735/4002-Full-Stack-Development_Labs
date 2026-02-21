import { departments as initialDepartments } from "../data/departments";
import type { Department } from "../types/Employee";

let departments: Department[] = [...initialDepartments];

export const employeeRepo = {
  getDepartments: (): Department[] => {
    return departments;
  },

  createEmployee: (
    firstName: string,
    lastName: string,
    departmentName: string
  ): Department[] => {

    departments = departments.map(dept =>
      dept.name === departmentName
        ? {
            ...dept,
            employees: [...dept.employees, { firstName, lastName }]
          }
        : dept
    );

    return departments;
  }
};
