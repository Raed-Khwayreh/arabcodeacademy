import React from "react";
import styles from "../QuizzSection.module.css";
import Img, { StaticImageData } from "next/image";

interface QuizzSectionProps {
  title: string;
  description: string;
  icon: StaticImageData;
}

const QuizzSection = ({ title, description, icon }: QuizzSectionProps) => (
  <div className={`${styles.section}`}>
    <div className={`${styles.iconHeading}`}>
      <h1 className={`${styles.heading}`}>{title}</h1>
      <Img src={icon} alt={`${title} icon`} className={styles.icon} />
    </div>
    <p className={`${styles.description}`}>{description}</p>
  </div>
);

export default QuizzSection;
