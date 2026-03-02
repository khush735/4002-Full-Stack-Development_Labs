import { useFormInput } from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";
import type { Department } from "../types/Employee";

interface Props {
  departments: Department[];
  setDepartments: (departments: Department[]) => void;
}

const AddEmployeeForm = ({ departments, setDepartments }: Props) => {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const department = useFormInput(departments[0]?.name || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = employeeService.createEmployee(
      firstName.value,
      lastName.value,
      department.value
    );

    if (!result.success) {
      firstName.validate(() => result.message || null);
      return;
    }

    if (result.data) {
      setDepartments(result.data);
    }

    firstName.setValue("");
    lastName.setValue("");
  };

  return (
    <section className="department">
      <h2>Add Employee</h2>

      {firstName.error && (
        <p style={{ color: "red" }}>{firstName.error}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName.value}
            onChange={firstName.onChange}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName.value}
            onChange={lastName.onChange}
          />
        </div>

        <div>
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
        </div>

        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddEmployeeForm;