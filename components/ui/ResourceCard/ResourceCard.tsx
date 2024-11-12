import React from "react";
import styles from "./ResourceCard.module.css";

interface TitleWidth {
  desktop: string;
  tablet: string;
  mobile: string;
}

interface Props {
  title: string;
  icon: React.ReactNode;
  button: React.ReactNode;
  titleWidth: TitleWidth;
}

const ResourceCard: React.FC<Props> = ({ title, icon, button, titleWidth }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.title} style={{ "--title-width-desktop": titleWidth.desktop, "--title-width-tablet": titleWidth.tablet, "--title-width-mobile": titleWidth.mobile } as React.CSSProperties}>
        {title}
      </div>
      <div className={styles.buttonContainer}>{button}</div>
    </div>
  );
};

export default ResourceCard;
