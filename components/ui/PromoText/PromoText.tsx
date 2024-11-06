import React from "react";
import styles from "./PromoText.module.css";

interface PromoTextProps {
  title: string;
  text: string;
  button?: React.ReactNode;
  border?: boolean;
  opacity?: number;
}

const PromoText: React.FC<PromoTextProps> = ({
  title,
  text,
  button,
  border,
  opacity,
}) => {
  return (
    <div
      className={`${styles.container} ${border ? styles.withBorder : ""} ${
        opacity ? styles.overlay : ""
      }`}
      style={{
        backgroundColor: opacity
          ? `rgba(255, 255, 255, ${opacity})`
          : "#ffffff",
      }}
    >
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{text}</p>
      {button && <div className={styles.buttonContainer}>{button}</div>}
    </div>
  );
};

export default PromoText;
