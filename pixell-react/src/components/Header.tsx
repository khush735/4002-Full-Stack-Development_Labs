import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <h1>Pixell River Employee Directory</h1>
      <p>Welcome! Meet the people behind Pixell River Financial.</p>

      <nav style={{ marginTop: "10px" }}>
        <Link to="/employees" style={{ color: "white", marginRight: "15px" }}>
          Employees
        </Link>

        <Link to="/organization" style={{ color: "white" }}>
          Organization
        </Link>
      </nav>
    </header>
  );
};

export default Header;
