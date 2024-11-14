import React from "react";
import styles from "./ResourceCard.module.css";
import EllipsisCircleIcon from "../ACAButton/ACAButtonIcons/EllipsisCircleIcon";
import ACAButton from "../ACAButton/ACAButton";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<Props> = ({ title, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <div
        className={styles.title}
        style={{ width: title === "بنك الأسئلة التقنية" ? 192 : 220 }}
      >
        {title}
      </div>
      <div className={styles.buttonContainer}>
        {
          <ACAButton
            text="...المزيد"
            variant="teal"
            size="medium"
            icon={<EllipsisCircleIcon />}
          />
        }
      </div>
    </div>
  );
};

export default ResourceCard;
