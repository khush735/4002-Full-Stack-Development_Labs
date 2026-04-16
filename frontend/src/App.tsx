import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import EmployeesPage from "./components/EmployeesPage";
import Organization from "./components/Organization";

import { useAuth } from "@clerk/clerk-react";
import { employeeRepo } from "./repositories/employeeRepo";
import { employeeService } from "./services/employeeService";
import type { Department as DepartmentType } from "./types/Employee";

const App = () => {
  const [departments, setDepartments] = useState<DepartmentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      if (departments.length > 0) return; // Skip if already loaded (handles StrictMode double-call)
      console.log("Loading departments...");
      const data = await employeeRepo.getDepartments();
      console.log("Departments loaded:", data);
      setDepartments(data);
      setError(null);
    } catch (error) {
      console.error("Failed to load departments:", error);
      setError("Failed to load departments. Make sure backend is running on port 3000");
    } finally {
      setLoading(false);
    }
  };

  const { getToken } = useAuth();

  const addEmployee = async (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => {
    try {
      const token = await getToken();
      console.log("Adding employee:", { firstName, lastName, departmentName });
      const result = await employeeService.createEmployee(firstName, lastName, departmentName, token!);
      if (result.success) {
        setDepartments(result.data);
        console.log("Employee added, updated departments:", result.data);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Failed to add employee:", error);
      alert("Failed to add employee. Check console for details.");
    }
  };

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center" }}>Loading employees...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
        <p>{error}</p>
        <p>Make sure backend is running: cd backend && npm run dev</p>
      </div>
    );
  }

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