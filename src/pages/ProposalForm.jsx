import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function ProposalForm() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [scope, setScope] = useState("");
  const [pricing, setPricing] = useState("");
  const [timeline, setTimeline] = useState("");

  const navigate = useNavigate();

  const saveProposal = async () => {
    try {
      await addDoc(collection(db, "proposals"), {
        clientName,
        clientEmail,
        projectTitle,
        scope,
        pricing,
        timeline,
        createdAt: new Date()
      });
      alert("Proposal saved successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container proposal-form">
      <h2>Create Proposal</h2>

      <label>Client Name</label>
      <input
        placeholder="Enter client name"
        onChange={(e) => setClientName(e.target.value)}
      />

      <label>Client Email</label>
      <input
        placeholder="Enter client email"
        onChange={(e) => setClientEmail(e.target.value)}
      />

      <label>Project Title</label>
      <input
        placeholder="Enter project title"
        onChange={(e) => setProjectTitle(e.target.value)}
      />

      <label>Project Scope</label>
      <textarea
        placeholder="Describe features, deliverables, and expectations"
        onChange={(e) => setScope(e.target.value)}
      />

      <div className="row">
        <div>
          <label>Pricing</label>
          <input
            placeholder="₹50,000"
            onChange={(e) => setPricing(e.target.value)}
          />
        </div>

        <div>
          <label>Timeline</label>
          <input
            placeholder="6 Weeks"
            onChange={(e) => setTimeline(e.target.value)}
          />
        </div>
      </div>

      <button className="primary-btn" onClick={saveProposal}>
        Save Proposal
      </button>

      <button className="outline-btn" onClick={() => navigate("/preview")}>
        Preview Proposal
      </button>
    </div>
  );
}
