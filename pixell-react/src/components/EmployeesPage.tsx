import { useState } from "react";
import Department from "./Department";
import AddEmployeeForm from "./AddEmployeeForm";
import { employeeRepo } from "../repositories/employeeRepo";
import type { Department as DepartmentType } from "../types/Employee";

const EmployeesPage = () => {
  const [departments, setDepartments] = useState<DepartmentType[]>(
    employeeRepo.getDepartments()
  );

  return (
    <>
      {departments.map((dept, index) => (
        <Department key={index} department={dept} />
      ))}

      <AddEmployeeForm
        departments={departments}
        setDepartments={setDepartments}
      />
    </>
  );
};

export default EmployeesPage;