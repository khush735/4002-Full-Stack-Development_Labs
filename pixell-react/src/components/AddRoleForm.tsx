import { useFormInput } from "../hooks/useFormInput";
import { roleService } from "../services/roleService";
import type { Role } from "../types/Roles";

interface Props {
  setRoles: (roles: Role[]) => void;
}

const AddRoleForm = ({ setRoles }: Props) => {

  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = roleService.createRole(
      firstName.value,
      lastName.value,
      role.value
    );

    if (!result.success) {
      firstName.validate(() => result.message || null);
      return;
    }

    if (result.data) {
      setRoles(result.data);
    }
    firstName.setValue("");
    lastName.setValue("");
    role.setValue("");
  };

  return (
    <section>
      <h2>Add Organization Member</h2>

      {firstName.error && <p style={{color:"red"}}>{firstName.error}</p>}

      <form onSubmit={handleSubmit}>
        <input value={firstName.value} onChange={firstName.onChange} placeholder="First Name"/>
        <input value={lastName.value} onChange={lastName.onChange} placeholder="Last Name"/>
        <input value={role.value} onChange={role.onChange} placeholder="Role"/>

        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddRoleForm;