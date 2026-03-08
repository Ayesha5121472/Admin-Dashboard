import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-3">
        {/* Products Card */}
        <div
          className="col-12 col-md-6 col-lg-3"
          onClick={() => navigate("/all-products")}
          style={{ cursor: "pointer" }}
        >
          <div className="card shadow-sm p-3 hover-shadow">
            <h5>Total Products</h5>
            <h3>{products.length}</h3>
          </div>
        </div>

        {/* Users Card */}
        <div
          className="col-12 col-md-6 col-lg-3"
          onClick={() => navigate("/users")}
          style={{ cursor: "pointer" }}
        >
          <div className="card shadow-sm p-3 hover-shadow">
            <h5>Total Users</h5>
            <h3>{users.length}</h3>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card shadow-sm p-3">
            <h5>Revenue</h5>
            <h3>$0</h3>
          </div>
        </div>

        {/* Orders Card */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card shadow-sm p-3">
            <h5>Orders</h5>
            <h3>0</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;