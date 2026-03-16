// src/components/Organization.tsx
import { useEffect, useState } from "react";
import { roleRepo } from "../repositories/roleRepo";
import AddRoleForm from "./AddRoleForm";
import type { Role } from "../types/Roles";

const Organization = () => {

  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    roleRepo.getRoles().then(setRoles);
  }, []);

  return (
    <section className="department">
      <h2>Organization Leadership</h2>

      {roles.map((person, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0",
            borderBottom: "1px solid #ccc"
          }}
        >
          <span>
            {person.firstName} {person.lastName}
          </span>

          <span>{person.role}</span>
        </div>
      ))}

      <AddRoleForm setRoles={setRoles} />

    </section>
  );
};

export default Organization;