import { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";

export default function ProposalPreview() {
  const [proposal, setProposal] = useState(null);

  useEffect(() => {
    const fetchProposal = async () => {
      const q = query(
        collection(db, "proposals"),
        orderBy("createdAt", "desc"),
        limit(1)
      );
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        setProposal(doc.data());
      });
    };

    fetchProposal();
  }, []);

  if (!proposal) {
    return <h3 style={{ textAlign: "center" }}>Loading proposal...</h3>;
  }

  const downloadPDF = () => {
    const element = document.getElementById("proposal");
    html2pdf()
      .from(element)
      .set({
        margin: 10,
        filename: "Project_Proposal.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .save();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={downloadPDF}>Download as PDF</button>

      <div id="proposal" className="container">
        <h1>PROJECT PROPOSAL</h1>

        <p><strong>Client Name:</strong> {proposal.clientName}</p>
        <p><strong>Client Email:</strong> {proposal.clientEmail}</p>

        <hr />

        <h3>Project Title</h3>
        <p>{proposal.projectTitle}</p>

        <h3>Project Scope</h3>
        <p>{proposal.scope}</p>

        <h3>Pricing</h3>
        <p>{proposal.pricing}</p>

        <h3>Timeline</h3>
        <p>{proposal.timeline}</p>
      </div>
    </div>
  );
}
