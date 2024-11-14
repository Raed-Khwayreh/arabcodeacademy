import React from "react";
import styles from "./TitleSection.module.css";

interface Props {
  title: string;
}
const TitleSection: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.TitleSection}>
      <div className={styles.SubTitleSection}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TitleSection;
