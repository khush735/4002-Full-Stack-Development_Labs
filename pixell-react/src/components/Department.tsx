import type { Department as DepartmentType } from "../types/Employee";

interface Props {
  department: DepartmentType;
}

const Department = ({ department }: Props) => {
  return (
    <section className="department">
      <h2>{department.name}</h2>
      <ul>
        {department.employees.map((emp, index) => (
          <li key={index}>
            {emp.firstName} {emp.lastName}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Department;
