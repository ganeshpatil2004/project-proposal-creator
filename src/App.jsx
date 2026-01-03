import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProposalForm from "./pages/ProposalForm";
import ProposalPreview from "./pages/ProposalPreview";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main app pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-proposal" element={<ProposalForm />} />
        <Route path="/preview" element={<ProposalPreview />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
