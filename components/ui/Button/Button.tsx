import React from "react";
import styles from "./Button.module.css";

interface Props {
  text: string;
  variant: "primary" | "secondary" | "teal" | "tomato" | "transparent";
  size: "small" | "medium" | "large";
  icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({ text, variant, size, icon }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button className={buttonClass}>
      {text}
      <span className={styles.icon}>{icon}</span>
    </button>
  );
};

export default Button;
