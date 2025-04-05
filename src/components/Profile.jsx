import React from "react";
import { useLocation } from "react-router-dom";
import profilePic from "../assets/avatar.png"; 

const Profile = () => {
  const location = useLocation();
  const user = location.state;

  return (
    <div className="container">
      <h2>Welcome to PopX 🎉</h2>
      <p>Your account has been created successfully.</p>

      <div className="profile">
        <img src={profilePic} alt="User Avatar" className="avatar" />
        <div>
          <h4>{user?.fullName || "No Name"}</h4>
          <p>{user?.email || "No Email"}</p>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Phone:</strong> {user?.phone}</p>
        <p><strong>Company:</strong> {user?.company}</p>
        <p><strong>Agency:</strong> {user?.agency === "yes" ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default Profile;
