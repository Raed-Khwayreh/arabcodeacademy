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
  border = false,
  opacity = 1,
}) => {
  return (
    <div
      className={`${styles.container} ${border ? styles.withBorder : ""} ${
        opacity < 1 ? styles.overlay : ""
      }`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      }}
    >
      <h1
        className={`${styles.title} ${
          button ? styles.titleWithButton : styles.titleWithoutButton
        }`}
      >
        {title}
      </h1>
      <p className={styles.content}>{text}</p>
      {button && <div className={styles.buttonContainer}>{button}</div>}
    </div>
  );
};

export default PromoText;
