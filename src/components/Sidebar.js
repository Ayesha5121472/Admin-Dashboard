import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h4 className="sidebar-title">Admin Panel</h4>

      <ul className="sidebar-menu list-unstyled flex-grow-1">
        <li>
          <Link className="sidebar-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="sidebar-link" to="/all-products">
            All Products
          </Link>
        </li>
        <li>
          <Link className="sidebar-link" to="/products">
            Add Products
          </Link>
        </li>
      </ul>

      <button className="btn btn-gradient sidebar-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;