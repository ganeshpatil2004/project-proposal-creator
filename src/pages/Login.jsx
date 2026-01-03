import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="password-toggle">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <span>Show Password</span>
      </div>

      <button onClick={handleLogin}>Login</button>

      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Don’t have an account?{" "}
        <span
          style={{ color: "#667eea", cursor: "pointer", fontWeight: "bold" }}
          onClick={() => navigate("/signup")}
        >
          Sign up
        </span>
      </p>
    </div>
  );
}
