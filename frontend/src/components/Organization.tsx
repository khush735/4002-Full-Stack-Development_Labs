import { useQuery } from "@tanstack/react-query";
import { roleRepo } from "../repositories/roleRepo";
import AddRoleForm from "./AddRoleForm";
import type { Role } from "../types/Roles";

const Organization = () => {

  const {
    data: roles = [],
    isLoading,
    isError
  } = useQuery<Role[]>({
    queryKey: ["roles"],
    queryFn: roleRepo.getRoles
  });

  if (isLoading) {
    return <p>Loading organization...</p>;
  }

  if (isError) {
    return <p>Failed to load roles</p>;
  }

  return (
    <section className="department">
      <h2>Organization Leadership</h2>

      {roles.map((person,index) => (
        <div
          key={index}
          style={{
            display:"flex",
            justifyContent:"space-between",
            padding:"8px 0",
            borderBottom:"1px solid #ccc"
          }}
        >
          <span>
            {person.firstName} {person.lastName}
          </span>

          <span>
            {person.role}
          </span>
        </div>
      ))}

      <AddRoleForm setRoles={() => {}} />
    </section>
  );
};

export default Organization;