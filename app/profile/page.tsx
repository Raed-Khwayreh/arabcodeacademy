"use client";
import React, { useState } from "react";
import styles from "./Profile.module.css";
import { ProfileDetails } from "./components";
import { profileData } from "./components/ProfileDetails/mock/profileData";
import CoursesDetails from "./components/CoursesDetails/CoursesDetails";

const Profile = () => {
  const [activeToggleButton, setActiveToggleButton] = useState<1 | 2>(2);

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
      <CoursesDetails
        coursesData={
          activeToggleButton === 1
            ? profileData.courses.filter(
                (course) => course.userSteps === course.totalSteps
              )
            : profileData.courses
        }
      />
    </div>
  );
};

export default Profile;
