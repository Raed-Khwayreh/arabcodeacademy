import React from "react";
import styles from "./TitleSection.module.css";

const TitleSection = ({ title }) => {
  return (
    <div className={styles.TitleSection}>
      <div className={styles.SubTitleSection}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TitleSection;
