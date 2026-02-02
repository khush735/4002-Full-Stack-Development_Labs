import { Link } from "react-router-dom";

const Header = () => {
  return (
<header className="site-header">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src="/pixell-logo.png" alt="Pixell Logo" style={{ height: '50px', marginRight: '10px' }} />
        <h1>Pixell River Employee Directory</h1>
      </div>
      <p>Welcome! Meet the people behind Pixell River Financial.</p>

      <nav style={{ marginTop: "10px" }}>
        <Link to="/employees" className="nav-link" style={{ color: "white", marginRight: "15px" }}>
          Employees
        </Link>

        <Link to="/organization" className="nav-link" style={{ color: "white" }}>
          Organization
        </Link>
      </nav>
    </header>
  );
};

export default Header;
