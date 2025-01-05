import React from "react";
import styles from "./FormField.module.css";
import AngleDownIcon from "../ACAButton/ACAButtonIcons/AngleDownIcon";

interface Props {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  isDropDown?: boolean;
  options?: string[];
  width?: string;
  labelAlign?: "center" | "right";
  error?: string;
  type?: string; 
}

const FormField: React.FC<Props> = ({
  label,
  placeholder,
  icon,
  name,
  value,
  onChange,
  isDropDown = false,
  options = [],
  width,
  labelAlign,
  error,
  type = "text",
}) => {
  return (
    <div
      className={`${styles.fieldContainer} ${
        labelAlign === "center" ? styles.centerAlign : styles.rightAlign
      }`}
      style={{ width }}
    >
      <div
        className={`${styles.labelContainer} ${
          labelAlign === "center" ? styles.centerAlign : styles.rightAlign
        }`}
      >
        <label className={styles.formLabel}>{label}</label>
        <span>{icon}</span>
      </div>

      {isDropDown ? (
        <div className={styles.selectInput}>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={`${styles.formInput} ${error ? styles.errorInput : ""}`}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className={styles.divider}></div>
          <AngleDownIcon />
        </div>
      ) : (
        <input
          className={`${styles.formInput} ${error ? styles.errorInput : ""}`}
          type={type} 
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
