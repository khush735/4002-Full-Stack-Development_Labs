import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

import Layout from "./components/Layout";
import EmployeesPage from "./components/EmployeesPage";
import Organization from "./components/Organization";

import { employeeRepo } from "./repositories/employeeRepo";
import type { Department } from "./types/Employee";

const App = () => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  const {
    data: departments = [],
    isLoading,
    isError
  } = useQuery<Department[]>({
    queryKey: ["departments"],
    queryFn: employeeRepo.getDepartments
  });

  const addEmployeeMutation = useMutation({
    mutationFn: async ({
      firstName,
      lastName,
      departmentName
    }: {
      firstName: string;
      lastName: string;
      departmentName: string;
    }) => {
      const token = await getToken();

      if (!token) {
        throw new Error("No auth token");
      }

      return employeeRepo.createEmployee(
        firstName,
        lastName,
        departmentName,
        token
      );
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["departments"]
      });
    }
  });

  const addEmployee = async (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => {
    try {
      await addEmployeeMutation.mutateAsync({
        firstName,
        lastName,
        departmentName
      });
    } catch (error) {
      console.error("Failed to add employee:", error);
      alert("Failed to add employee");
    }
  };

  if (isLoading) {
    return <div style={{padding:"20px"}}>Loading employees...</div>;
  }

  if (isError) {
    return (
      <div style={{padding:"20px", color:"red"}}>
        Failed to load employees
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

          <Route
            path="organization"
            element={<Organization />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;