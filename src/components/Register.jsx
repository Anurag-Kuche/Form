import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to profile/settings and send data via state
    navigate("/profile", { state: formData });
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone number" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email address" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="text" name="company" placeholder="Company name" onChange={handleChange} />

        <div className="radio-group">
          <p>Are you an Agency?*</p>
          <label>
            <input type="radio" name="agency" value="yes" onChange={handleChange} />
            Yes
          </label>
          <label>
            <input type="radio" name="agency" value="no" onChange={handleChange} />
            No
          </label>
        </div>

        <button type="submit" className="btn primary">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
