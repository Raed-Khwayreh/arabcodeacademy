import React from "react";
import styles from "./UnderlineText.module.css";

interface Props {
  title: string;
  paddingBottom?: number;
  fontWeight?: 500 | 600 | 700;
  fontSize?: { desktop?: number; tablet?: number; mobile?: number };
  color?: string;
  borderWidth?: number;
}

const UnderlineText: React.FC<Props> = ({
  title = "العنوان",
  paddingBottom = 8,
  fontSize = { desktop: 27, tablet: 25, mobile: 18 },
  fontWeight = 700,
  color = "var(--primary-color)",
  borderWidth = 2,
}) => {
  return (
    <div
      className={styles["title-container"]}
      style={{
        paddingBottom: paddingBottom,
        borderBottomWidth: `${borderWidth}px`,
        color: color,
      }}
    >
      <p
        className={styles.title}
        style={
          {
            fontWeight: fontWeight,
            color: color,
            borderColor: color,
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
