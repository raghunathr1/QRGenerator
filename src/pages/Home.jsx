import { useState } from "react";
import CertificateForm from "../components/CertificateForm";
import CertificatePreview from "../components/CertificatePreview";
import downloadPDF from "../utils/downloadPDF";
import "./Home.css";

function Home() {

  const [certificate, setCertificate] = useState(null);

  const handlePrint = () => {
    window.print();
  };

  return (

    <div className="home">

      <h1 className="title">
        Kalley CodeLabs Internship Portal
      </h1>

      <div className="dashboard">

        {/* Left Side */}

        <div className="left">

          <CertificateForm
            onCertificateGenerated={setCertificate}
          />

        </div>

        {/* Right Side */}

        <div className="right">

          <CertificatePreview
            certificate={certificate}
          />

          {/* Buttons */}

          {certificate && (

            <div
              style={{
                marginTop: "25px",
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >

              <button
                onClick={downloadPDF}
                style={{
                  padding: "12px 25px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                📥 Download PDF
              </button>

              <button
                onClick={handlePrint}
                style={{
                  padding: "12px 25px",
                  background: "#16a34a",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                🖨 Print Certificate
              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default Home;