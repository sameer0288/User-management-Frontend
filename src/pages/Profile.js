// Profile.js
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./Profile.css"; // Import the CSS file

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <div className="profile-item">
          <strong>Username:</strong> {user.username}
        </div>
        <div className="profile-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="profile-item">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="profile-item">
          <strong>Joined At:</strong>{" "}
          {new Date(user.createdAt).toLocaleString()}
        </div>
        <div className="profile-item">
          <strong>Updated At:</strong>{" "}
          {new Date(user.updatedAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
