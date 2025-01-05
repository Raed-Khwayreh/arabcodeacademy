import React from "react";
import styles from "./SocialButton.module.css";

interface SocialButtonProps {
  icon: React.ReactNode; 
  text: string; 
  variant: "google" | "facebook";
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, variant }) => {
  return (
    <button
      className={`${styles.socialButton} ${
        variant === "google" ? styles.googleButton : styles.facebookButton
      }`}
    >
      <span className={styles.icon}>{icon}</span>
      <div className={styles.divider}></div>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default SocialButton;
