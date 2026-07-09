import "./../styles/CertificatePreview.css";

import logo from "../assets/logo.jpeg";
import signature from "../assets/signature.jpeg";

function CertificatePreview({ certificate }) {

  if (!certificate) {
    return (
      <div
        id="certificate-preview"
        className="preview-container"
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <h2>📄 Certificate Preview</h2>

        <p>Generate a certificate to preview it here.</p>

      </div>
    );
  }

  return (

    <div
      id="certificate-preview"
      className="preview-container"
    >

      {/* Header */}

      <div className="preview-header">

        <img
          src={logo}
          alt="Kalley CodeLabs"
          className="preview-logo"
        />

        <h1 className="company-name">
          Kalley CodeLabs
        </h1>

        <h2 className="certificate-title">
          CERTIFICATE OF INTERNSHIP
        </h2>

      </div>

      <br />

      <p>
        This certificate is proudly presented to
      </p>

      <h1 className="student-name">
        {certificate.fullName}
      </h1>

      <p>
        For successfully completing the internship as
      </p>

      <h2 className="role">
        {certificate.role}
      </h2>

      <div className="info">

        <p>
          <strong>Course :</strong> {certificate.course}
        </p>

        <p>
          <strong>Certificate ID :</strong> {certificate.certificateId}
        </p>

        <p>
          <strong>Internship Duration :</strong>{" "}
          {new Date(certificate.startDate).toLocaleDateString()}{" "}
          to{" "}
          {new Date(certificate.endDate).toLocaleDateString()}
        </p>

        <p>
          <strong>Issue Date :</strong>{" "}
          {new Date(certificate.issueDate).toLocaleDateString()}
        </p>

      </div>

      <div className="bottom-section">

        {/* QR Code */}

        <div>

          <img
            src={certificate.qrCode}
            alt="QR Code"
            className="qr"
          />

          <p>Scan to Verify</p>

        </div>

        {/* Signature */}

        <div className="signature-box">

          <img
            src={signature}
            alt="Director Signature"
            className="signature"
          />

          <hr />

          <h3>Raghunath Sukdev Kapse</h3>

          <p>Founder & Director</p>

          <p>Kalley CodeLabs</p>

        </div>

      </div>

    </div>

  );

}

export default CertificatePreview;