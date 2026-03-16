import { departments } from "../data/department";

export const employeeRepository = {

  getDepartments() {
    return departments;
  },

  addEmployee(firstName: string, lastName: string, departmentName: string) {

    const dept = departments.find(d => d.name === departmentName);

    if (!dept) return null;

    dept.employees.push({ firstName, lastName });

    return departments;
  }

};