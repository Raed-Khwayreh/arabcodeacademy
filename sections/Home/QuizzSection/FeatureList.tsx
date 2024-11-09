import React from "react";
import styles from "./QuizzSection.module.css";
import Img from "next/image";

const QuizzSection = ({ title, description, icon }) => (
  <div className={`${styles.section}`}>
    <div className={`${styles.iconHeading}`}>
      <h3 className={`${styles.heading}`}>{title}</h3>
      <Img src={icon} alt={`${title} icon`} className={styles.icon} />
    </div>
    <p className={`${styles.description}`}>{description}</p>
  </div>
);

export default QuizzSection;
