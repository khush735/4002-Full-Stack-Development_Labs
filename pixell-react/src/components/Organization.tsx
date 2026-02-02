import { roles } from "../data/roles";

const Organization = () => {
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
    </section>
  );
};

export default Organization;
