import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react";
import { useFormInput } from "../hooks/useFormInput";
import { roleRepo } from "../repositories/roleRepo";
import type { Role } from "../types/Roles";

interface Props {
  setRoles: (roles: Role[]) => void;
}

const AddRoleForm = ({ setRoles }: Props) => {

  const { getToken } = useAuth();

  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.value || !lastName.value || !role.value) {
      firstName.validate(() => "All fields are required");
      return;
    }

    const token = await getToken();

    if (!token) {
      alert("Please login again");
      return;
    }

    try {
      const updatedRoles = await roleRepo.createRole(
        firstName.value,
        lastName.value,
        role.value,
        token
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

      {/* Not logged in */}
      <SignedOut>
        <p>Please login to add organization members</p>
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

          <input
            type="text"
            placeholder="Role"
            value={role.value}
            onChange={role.onChange}
          />

          <button type="submit">Add</button>
        </form>
      </SignedIn>
    </section>
  );
};

export default AddRoleForm;