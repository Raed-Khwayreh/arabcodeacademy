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
}) => {
  return (
    <div className={styles.fieldContainer} style={{ width }}>
      <div className={styles.labelContainer}>
        <label className={styles.formLabel}>{label}</label>
        <span>{icon}</span>
      </div>
      {isDropDown ? (
        <div className={styles.selectInput}>
          <select name={name} value={value} onChange={onChange}>
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
          className={styles.formInput}
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
