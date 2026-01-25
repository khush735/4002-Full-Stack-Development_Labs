import { useState } from "react";
import type { Department } from "../types/Employee";

interface Props {
  departments: Department[];
  onAddEmployee: (firstName: string, lastName: string, departmentName: string) => void;
}

const AddEmployeeForm = ({ departments, onAddEmployee }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState(departments[0]?.name || "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters long.");
      return;
    }

    onAddEmployee(firstName.trim(), lastName.trim(), department);

    setFirstName("");
    setLastName("");
  };

  return (
    <section className="department">
      <h2>Add New Employee</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className="add-employee-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            value={department}
            onChange={e => setDepartment(e.target.value)}
          >
            {departments.map((dept, index) => (
              <option key={index} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">Add Employee</button>
      </form>
    </section>
  );
};

export default AddEmployeeForm;
