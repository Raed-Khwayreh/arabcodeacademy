import React from "react";
import { LinkIcon, LocationIcon, UserIcon } from "../icons";
import styles from "../ProfileDetails.module.css";
import { SocialMediaoIconsMap } from "../icons/SocialMediaoIconsMap";
import { profileData } from "../mock/profileData";
import { UserData } from "@/types/UserDataProps";

interface ProfileInfoProps {
  data: UserData;
}

const ProfileInfo = ({ data }: ProfileInfoProps) => {
  return (
    <div className={styles.info}>
      <h1 className={styles["user-name"]}>{data.username}</h1>
      <div className={styles["icon-container"]}>
        <h2
          className={styles["icon-label"]}
        >{`${data.firstName} ${data.lastName}`}</h2>
        <UserIcon />
      </div>
      <div className={`${styles["icon-container"]} ${styles["location"]}`}>
        <h2 className={styles["icon-label"]}>{data.country}</h2>
        <LocationIcon />
      </div>
      {profileData.links && (
        <div className={styles["links-container"]}>
          <div className={styles["icon-container"]}>
            <h2 className={styles["icon-label"]}>الروابط:</h2>
            <LinkIcon />
          </div>
          <div className={styles.links}>
            {profileData.links.map((link) => (
              <div key={link.url} className={styles["link-container"]}>
                {link.site && SocialMediaoIconsMap[link.site]}
                <h2 className={styles["link-label"]}>{link.url}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
