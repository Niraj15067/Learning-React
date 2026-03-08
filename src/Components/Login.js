import { useState } from "react";
import { useNavigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const configUser = "Niraj";
  const configPass = "admin";

  function handleLogin() {
    if (username === configUser && password === configPass) {
      localStorage.setItem("login", "true");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
