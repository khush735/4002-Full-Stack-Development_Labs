import Department from "./Department";
import AddEmployeeForm from "./AddEmployeeForm";
import type { Department as DepartmentType } from "../types/Employee";

interface Props {
  departments: DepartmentType[];
  onAddEmployee: (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => void;
}

const EmployeesPage = ({ departments, onAddEmployee }: Props) => {
  const handleAddEmployee = (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => {
    onAddEmployee(firstName, lastName, departmentName);
  };

  return (
    <>
      {departments.map((dept, index) => (
        <Department key={index} department={dept} />
      ))}

      <AddEmployeeForm
        departments={departments}
        onAddEmployee={handleAddEmployee}
      />
    </>
  );
};

export default EmployeesPage;
