import { useFormInput } from "../hooks/useFormInput";
import { roleRepo } from "../repositories/roleRepo";
import type { Role } from "../types/Roles";

interface Props {
  setRoles: (roles: Role[]) => void;
}

const AddRoleForm = ({ setRoles }: Props) => {

  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.value || !lastName.value || !role.value) {
      firstName.validate(() => "All fields are required");
      return;
    }

    try {
      const updatedRoles = await roleRepo.createRole(
        firstName.value,
        lastName.value,
        role.value
      );

      setRoles(updatedRoles);

      firstName.setValue("");
      lastName.setValue("");
      role.setValue("");

    } catch (error) {
      console.error("Failed to create role", error);
    }
  };

  return (
    <section>
      <h2>Add Organization Member</h2>

      {firstName.error && <p style={{ color: "red" }}>{firstName.error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          value={firstName.value}
          onChange={firstName.onChange}
          placeholder="First Name"
        />

        <input
          value={lastName.value}
          onChange={lastName.onChange}
          placeholder="Last Name"
        />

        <input
          value={role.value}
          onChange={role.onChange}
          placeholder="Role"
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddRoleForm;