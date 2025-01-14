"use client";
import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { ProfileDetails } from "./components";
import { profileData } from "./components/ProfileDetails/mock/profileData";
import CoursesDetails from "./components/CoursesDetails/CoursesDetails";
import { useRouter } from "next/navigation";
import { ACAError, ACALoading } from "@/components/ui";
import { ErrorMessage } from "@/types/ErrorMessage";
import { UserData } from "@/types/UserDataProps";
import { verifyUser } from "./utils/verifyUser";

const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>();
  const [activeToggleButton, setActiveToggleButton] = useState<1 | 2>(2);
  const [isLoading, setIsLoading] = useState(true);

  const handleOnToggle = () => {
    setActiveToggleButton((e) => (e == 1 ? 2 : 1));
  };

  useEffect(() => {
    verifyUser(router).then((user) => {
      setUserData(user);
      setIsLoading(false);
    });
  }, [router]);

  if (isLoading) {
    return <ACALoading height={"100vh"} />;
  }

  if (!userData) {
    return <ACAError errorMessage={ErrorMessage.CONNECTION_FAILD} />;
  }

  return (
    <div className={styles.container}>
      <ProfileDetails
        onToggle={handleOnToggle}
        activeToggleButton={activeToggleButton}
        data={userData}
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
