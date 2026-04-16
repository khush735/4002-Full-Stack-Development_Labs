import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react";
import type { Department } from "../types/Employee";
import { useFormInput } from "../hooks/useFormInput";

interface Props {
  departments: Department[];
  onAddEmployee: (
    firstName: string,
    lastName: string,
    departmentName: string,
    token: string
  ) => Promise<void>;
}

const AddEmployeeForm = ({ departments, onAddEmployee }: Props) => {

  const { getToken } = useAuth();

  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const department = useFormInput(departments[0]?.name || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.value || !lastName.value) {
      firstName.validate(() => "First name and last name are required");
      return;
    }

    try {
      const token = await getToken();

      console.log("TOKEN 👉", token); //  DEBUG

      if (!token) {
        alert("Please login again");
        return;
      }

      await onAddEmployee(
        firstName.value,
        lastName.value,
        department.value,
        token
      );

      console.log("✅ Employee added successfully");

      firstName.setValue("");
      lastName.setValue("");

    } catch (error) {
      console.error("❌ Add employee failed:", error);
      alert("Failed to add employee. Check console.");
    }
  };

  return (
    <section className="department">
      <h2>Add Employee</h2>

      {/* Not logged in */}
      <SignedOut>
        <p>Please login to add employees</p>
        <SignInButton />
      </SignedOut>

      {/* Logged in */}
      <SignedIn>
        {firstName.error && (
          <p style={{ color: "red" }}>{firstName.error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName.value}
            onChange={firstName.onChange}
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName.value}
            onChange={lastName.onChange}
          />

          <select
            value={department.value}
            onChange={department.onChange}
          >
            {departments.map((dept, index) => (
              <option key={index} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>

          <button type="submit">Add</button>
        </form>
      </SignedIn>
    </section>
  );
};

export default AddEmployeeForm;