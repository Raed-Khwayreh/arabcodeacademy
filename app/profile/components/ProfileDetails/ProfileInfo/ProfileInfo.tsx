import React from "react";
import { LinkIcon, LocationIcon, UserIcon } from "../icons";
import { ProfileDataProps } from "../mock/profileData";
import styles from "../ProfileDetails.module.css";
import { SocialMediaoIconsMap } from "../icons/SocialMediaoIconsMap";

interface ProfileInfoProps {
  data: ProfileDataProps;
}

const ProfileInfo = ({ data }: ProfileInfoProps) => {
  return (
    <div className={styles.info}>
      <h1 className={styles["user-name"]}>{data.userName}</h1>
      <div className={styles["icon-container"]}>
        <h2 className={styles["icon-label"]}>{data.name}</h2>
        <UserIcon />
      </div>
      <div className={`${styles["icon-container"]} ${styles["location"]}`}>
        <h2 className={styles["icon-label"]}>{data.location}</h2>
        <LocationIcon />
      </div>
      {data.links && (
        <div className={styles["links-container"]}>
          <div className={styles["icon-container"]}>
            <h2 className={styles["icon-label"]}>الروابط:</h2>
            <LinkIcon />
          </div>
          <div className={styles.links}>
            {data.links.map((link) => (
              <div key={link.url} className={styles["link-container"]}>
                {link.site && SocialMediaoIconsMap[link.site]}
                <h2 className={styles["link-label"]}>
                  <a href={link.url}> {link.url}</a>
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
