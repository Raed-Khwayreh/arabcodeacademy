import React from "react";
import styles from "./FormField.module.css";

interface Props {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const FormField: React.FC<Props> = ({ label, placeholder, icon, name, value, onChange }) => {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.labelContainer}>
        <label className={styles.formLabel}>{label}</label>
        <span>{icon}</span>
      </div>
      <input
        className={styles.formInput}
        placeholder={placeholder}
        name={name} 
        value={value}
        onChange={onChange} 
      />
    </div>
  );
};

export default FormField;
