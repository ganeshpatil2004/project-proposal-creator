import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>

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

      <button onClick={handleSignup}>Signup</button>

      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Already have an account?{" "}
        <span
          style={{ color: "#667eea", cursor: "pointer", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          Login
        </span>
      </p>
    </div>
  );
}
