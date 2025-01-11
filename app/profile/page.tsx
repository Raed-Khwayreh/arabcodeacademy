import React from "react";
import styles from "./Profile.module.css";
import { ProfileDetails } from "./components";

const Profile = () => {
  return (
    <div className={styles.container}>
      <ProfileDetails />
    </div>
  );
};

export default Profile;
