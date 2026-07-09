import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function VerifyCertificate() {

  const { certificateId } = useParams();

  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertificate();
  }, []);

  const fetchCertificate = async () => {
    try {
      const res = await API.get(`/certificate/verify/${certificateId}`);

      setCertificate(res.data.certificate);
    } catch (error) {
      console.log(error);
      setCertificate(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!certificate) {
    return <h2>❌ Certificate Not Found</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>✅ Certificate Verified</h1>

      <p><strong>Certificate ID:</strong> {certificate.certificateId}</p>

      <p><strong>Name:</strong> {certificate.fullName}</p>

      <p><strong>Email:</strong> {certificate.email}</p>

      <p><strong>Course:</strong> {certificate.course}</p>

      <p><strong>Role:</strong> {certificate.role}</p>

      <p><strong>Status:</strong> {certificate.status}</p>

      <img
        src={certificate.qrCode}
        alt="QR Code"
        width="200"
      />
    </div>
  );
}

export default VerifyCertificate;