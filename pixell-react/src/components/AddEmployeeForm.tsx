import { useFormInput } from "../hooks/useFormInput";
import type { Department } from "../types/Employee";

interface Props {
  departments: Department[];
  onAddEmployee: (firstName: string, lastName: string, departmentName: string) => void;
}

const AddEmployeeForm = ({ departments, onAddEmployee }: Props) => {

  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const department = useFormInput(departments[0]?.name || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (firstName.value.trim().length < 3) {
      firstName.setError("First name must be at least 3 characters.");
      return;
    }

    onAddEmployee(firstName.value, lastName.value, department.value);
    
    firstName.setValue("");
    lastName.setValue("");
  };

  return (
    <section>
      <h2>Add Employee</h2>

      {firstName.error && <p style={{ color: "red" }}>{firstName.error}</p>}

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
    </section>
  );
};

export default AddEmployeeForm;
