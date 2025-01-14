import React from "react";
import styles from "./ACAButton.module.css";

interface Props {
  text: string;
  variant: "primary" | "secondary" | "teal" | "tomato" | "transparent";
  size: "small" | "medium" | "large" | "xlarge";
  icon?: React.ReactNode;
  boxShadow?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const ACAButton: React.FC<Props> = ({
  text,
  variant,
  size,
  icon,
  boxShadow,
  onClick,
  disabled,
  loading,
  type,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${
    loading ? styles.loading : ""
  }`;

  return (
    <button
      className={buttonClass}
      style={{ boxShadow }}
      onClick={onClick}
      disabled={disabled || loading}
      type="submit"
    >
      {loading ? "جاري التحميل..." : text}
      {!loading && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default ACAButton;
