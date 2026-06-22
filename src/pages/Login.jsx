import { useState } from "react";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    const response = await api.post("/api/auth/login", {
      email,
      password,
    });

    console.log("TOKEN:", response.data.token);

    localStorage.setItem("token", response.data.token);

    alert("Login Successful!");
  } catch (error) {
    console.error(error);
    alert("Login Failed!");
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Delivery Choco Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;