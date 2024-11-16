import React from "react";
import styles from "./ACAButton.module.css";

interface Props {
  text: string;
  variant: "primary" | "secondary" | "teal" | "tomato" | "transparent";
  size: "small" | "medium" | "large" | "xlarge";
  icon?: React.ReactNode;
  boxShadow?: string;
}

const ACAButton: React.FC<Props> = ({
  text,
  variant,
  size,
  icon,
  boxShadow,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button className={buttonClass} style={{ boxShadow }}>
      {text}
      <span className={styles.icon}>{icon}</span>
    </button>
  );
};

export default ACAButton;
