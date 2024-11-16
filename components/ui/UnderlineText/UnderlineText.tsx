import React from "react";
import styles from "./UnderlineText.module.css";

interface Props {
  title: string;
  paddingBottom?: number;
  fontWeight?: 600 | 700;
  fontSize?: { desktop?: number; tablet?: number; mobile?: number };
}

const UnderlineText: React.FC<Props> = ({
  title = "العنوان",
  paddingBottom = 8,
  fontSize = { desktop: 27, tablet: 25, mobile: 18 },
  fontWeight = 700,
}) => {
  return (
    <div
      className={styles["title-container"]}
      style={{ paddingBottom: paddingBottom }}
    >
      <p
        className={styles.title}
        style={
          {
            fontWeight: fontWeight,
            "--font-size-desktop": `${fontSize?.desktop}px`,
            "--font-size-tablet": `${fontSize?.tablet}px`,
            "--font-size-mobile": `${fontSize?.mobile}px`,
          } as React.CSSProperties
        }
      >
        {title}
      </p>
    </div>
  );
};

export default UnderlineText;
