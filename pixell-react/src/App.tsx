import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Department from "./components/Department";
import AddEmployeeForm from "./components/AddEmployeeForm";
import { departments as initialDepartments } from "./data/departments";
import type { Department as DepartmentType } from "./types/Employee";

const App = () => {
  const [departments, setDepartments] = useState<DepartmentType[]>(initialDepartments);

  const addEmployee = (firstName: string, lastName: string, departmentName: string) => {
    setDepartments(prev =>
      prev.map(dept =>
        dept.name === departmentName
          ? {
              ...dept,
              employees: [...dept.employees, { firstName, lastName }]
            }
          : dept
      )
    );
  };

  return (
    <>
      <Header />

      <main>
        {departments.map((dept, index) => (
          <Department key={index} department={dept} />
        ))}

        <AddEmployeeForm
          departments={departments}
          onAddEmployee={addEmployee}
        />
      </main>

      <Footer />
    </>
  );
};

export default App;
