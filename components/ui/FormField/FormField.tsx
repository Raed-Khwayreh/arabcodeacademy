import React from "react";
import styles from "./FormField.module.css";

interface Props {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
}

const FormField: React.FC<Props> = ({ label, placeholder, icon }) => {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.labelContainer}>
        <label className={styles.formLabel}>{label}</label>
        <span>{icon}</span>
      </div>
      <input className={styles.formInput} placeholder={placeholder}></input>
    </div>
  );
};

export default FormField;
