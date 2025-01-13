import React from "react";
import styles from "./ProfileDetails.module.css";
import { ACAButton } from "@/components/ui";
import { EditProfileIcon } from "@/public/icons";
import Image from "next/image";
import avatar from "@/public/images/default-profile.webp";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileDataProps } from "./mock/profileData";
import ToggleButtons from "./ToggleButtons/ToggleButtons";
import { BurgerMenu } from "@/components/ui/Navbar/icons";

interface ProfileDetailsProps {
  data: ProfileDataProps;
  activeToggleButton: 1 | 2;
  onToggle: () => void;
}

const ProfileDetails = ({
  data,
  activeToggleButton,
  onToggle,
}: ProfileDetailsProps) => {
  return (
    <section className={styles.container}>
      <div className={styles["header-container"]}>
        <div className={styles["header-details"]}>
          <ProfileInfo data={data} />
          <Image
            src={avatar}
            width={100}
            height={100}
            alt={`profile-pic`}
            className={styles.profileImage}
          />
        </div>
        <ACAButton
          size="small"
          variant="teal"
          text="تعديل"
          icon={<EditProfileIcon />}
        />
        <div className={styles.details}>
          <p>تفاصيل</p>
          <BurgerMenu color="var(--primary-color)" />
        </div>
      </div>
      <ToggleButtons
        completedCourses={
          data.courses.filter((e) => e.userSteps === e.totalSteps).length
        }
        coursesNum={data.courses.length}
        activeToggleButton={activeToggleButton}
        onToggle={onToggle}
      />
    </section>
  );
};

export default ProfileDetails;
