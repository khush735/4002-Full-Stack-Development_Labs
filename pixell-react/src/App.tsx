import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import EmployeesPage from "./components/EmployeesPage";
import Organization from "./components/Organization";

import { departments as initialDepartments } from "./data/departments";
import type { Department as DepartmentType } from "./types/Employee";

const App = () => {
  const [departments, setDepartments] = useState<DepartmentType[]>(initialDepartments);

  const addEmployee = (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route
            index
            element={
              <EmployeesPage
                departments={departments}
                onAddEmployee={addEmployee}
              />
            }
          />

          <Route
            path="employees"
            element={
              <EmployeesPage
                departments={departments}
                onAddEmployee={addEmployee}
              />
            }
          />

          <Route path="organization" element={<Organization />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
