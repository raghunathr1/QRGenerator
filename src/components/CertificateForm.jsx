import { useState } from "react";
import API from "../services/api";

function CertificateForm({ onCertificateGenerated }) {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
    role: "",
    startDate: "",
    endDate: "",
    issueDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post(
        "/certificate/create",
        formData
      );

      // Send generated certificate to Home.jsx
      onCertificateGenerated(res.data.certificate);

      alert("✅ Certificate Generated Successfully");

      // Reset Form
      setFormData({
        fullName: "",
        email: "",
        course: "",
        role: "",
        startDate: "",
        endDate: "",
        issueDate: "",
      });

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Something Went Wrong"
      );

    }
  };

  return (

    <form className="certificate-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="role"
        placeholder="Internship Role"
        value={formData.role}
        onChange={handleChange}
        required
      />

      <label>
        Internship Start Date
      </label>

      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        required
      />

      <label>
        Internship End Date
      </label>

      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        required
      />

      <label>
        Issue Date
      </label>

      <input
        type="date"
        name="issueDate"
        value={formData.issueDate}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Generate Certificate
      </button>

    </form>

  );

}

export default CertificateForm;