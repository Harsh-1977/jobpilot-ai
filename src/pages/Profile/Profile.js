import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    skills: "",
    image: null,
  });

  const [preview, setPreview] = useState(
    "https://i.pravatar.cc/150?img=12"
  );

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfile({
        ...profile,
        image: file,
      });

      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(profile);

    // API Integration will come later
    alert("Profile Updated Successfully");
  };

  return (
    <DashboardLayout>
      <div className="profile-container">
        <h2>My Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="profile-image">
            <img src={preview} alt="Profile" />

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </div>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={profile.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={profile.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="college"
            placeholder="College"
            value={profile.college}
            onChange={handleChange}
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={profile.degree}
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="skills"
            placeholder="Skills"
            value={profile.skills}
            onChange={handleChange}
          />

          <button type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default Profile;