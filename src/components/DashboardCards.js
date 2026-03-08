const DashboardCards = ({ totalProducts, totalUsers, revenue, orders }) => {
  return (
    <div className="row g-3">
      {/* Total Products Card */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="dashboard-card">
          <h5>Total Products</h5>
          <h2>{totalProducts}</h2>
        </div>
      </div>

      {/* Total Users Card */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="dashboard-card">
          <h5>Total Users</h5>
          <h2>{totalUsers}</h2>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="dashboard-card">
          <h5>Revenue</h5>
          <h2>${revenue}</h2>
        </div>
      </div>

      {/* Orders Card */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="dashboard-card">
          <h5>Orders</h5>
          <h2>{orders}</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;