import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AllProducts from "./pages/AllProducts";
import UsersTable from "./pages/UsersTable"; // <-- import users page
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="flex-grow-1 p-3">
                <Dashboard />
              </div>
            </div>
          }
        />

        {/* Products */}
        <Route
          path="/products"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="flex-grow-1 p-3">
                <Products />
              </div>
            </div>
          }
        />

        {/* All Products */}
        <Route
          path="/all-products"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="flex-grow-1 p-3">
                <AllProducts />
              </div>
            </div>
          }
        />

        {/* Users Table */}
        <Route
          path="/users"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="flex-grow-1 p-3">
                <UsersTable />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;