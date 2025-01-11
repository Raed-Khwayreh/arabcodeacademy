"use client";
import React, { useState } from "react";
import styles from "./Profile.module.css";
import { ProfileDetails } from "./components";
import { profileData } from "./components/ProfileDetails/mock/profileData";

const Profile = () => {
  const [activeToggleButton, setActiveToggleButton] = useState<1 | 2>(1);

  const handleOnToggle = () => {
    setActiveToggleButton((e) => (e == 1 ? 2 : 1));
  };

  return (
    <div className={styles.container}>
      <ProfileDetails
        onToggle={handleOnToggle}
        activeToggleButton={activeToggleButton}
        data={profileData}
      />
    </div>
  );
};

export default Profile;
