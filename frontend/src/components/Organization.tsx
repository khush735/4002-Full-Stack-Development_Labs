import { useEffect, useState } from "react";
import { roleRepo } from "../repositories/roleRepo";
import AddRoleForm from "./AddRoleForm";
import type { Role } from "../types/Roles";

const Organization = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    try {
      console.log("Loading roles...");
      const data = await roleRepo.getRoles();
      console.log("Roles loaded:", data);
      setRoles(data);
      setError(null);
    } catch (error) {
      console.error("Failed to load roles:", error);
      setError("Failed to load organization members");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="department">
        <h2>Organization Leadership</h2>
        <p>Loading organization members...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="department">
        <h2>Organization Leadership</h2>
        <p style={{ color: "red" }}>{error}</p>
      </section>
    );
  }

  return (
    <section className="department">
      <h2>Organization Leadership</h2>

      {roles.length === 0 ? (
        <p>No organization members found. Add some using the form below.</p>
      ) : (
        roles.map((person, index) => (
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
        ))
      )}

      <AddRoleForm setRoles={setRoles} />
    </section>
  );
};

export default Organization;