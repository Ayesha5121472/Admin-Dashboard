import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUsers, saveUsers } from "../utils/localStorageHelper";

const Signup = () => {
  const [fullName, setFullName] = useState(""); // New state for full name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      alert("User already exists!");
      return;
    }
    users.push({ fullName, email, password }); // Save full name too
    saveUsers(users);
    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="glass-card p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Signup</h3>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-gradient w-100">
            Signup
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;