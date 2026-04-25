import Department from "./Department";
import AddEmployeeForm from "./AddEmployeeForm";
import type { Department as DepartmentType } from "../types/Employee";

interface Props {
  departments: DepartmentType[];
  onAddEmployee: (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => Promise<void>;
}

const EmployeesPage = ({ departments, onAddEmployee }: Props) => {

  const handleAddEmployee = async (
    firstName: string,
    lastName: string,
    departmentName: string,
    _token: string
  ) => {
    await onAddEmployee(
      firstName,
      lastName,
      departmentName
    );
  };

  return (
    <>
      {departments.map((dept, index) => (
        <Department
          key={index}
          department={dept}
        />
      ))}

      <AddEmployeeForm
        departments={departments}
        onAddEmployee={handleAddEmployee}
      />
    </>
  );
};

export default EmployeesPage;