import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <button
        className="dashboard-btn"
        onClick={() => navigate("/create-proposal")}
      >
        Create New Proposal
      </button>

      <button className="secondary-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
