import React from "react";
import styles from "./FormField.module.css";
import AngleDownIcon from "../../../public/icons/AngleDownIcon";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;

interface Props {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: InputChangeEvent | SelectChangeEvent) => void;
  isDropDown?: boolean;
  options?: string[];
  width?: string;
  labelAlign?: "center" | "right";
  error?: string;
  fontSize?: string;
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
  labelAlign = "right",
  error,
  fontSize,
  type = "text",
}) => {
  const alignment =
    labelAlign === "center" ? styles.centerAlign : styles.rightAlign;

  return (
    <div
      className={`${styles.fieldContainer} ${alignment}`}
      style={{ width, fontSize }}
    >
      <div className={styles.labelContainer}>
        <label className={styles.formLabel}>{label}</label>
        <span>{icon}</span>
      </div>

      {isDropDown ? (
        <>
          <div className={styles.selectInput}>
            <select
              name={name}
              value={value}
              onChange={onChange as (e: SelectChangeEvent) => void}
              className={`${styles.formInput} ${
                error ? styles.errorInput : ""
              }`}
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
          {error && <div className={styles.errorText}>{error}</div>}
        </>
      ) : (
        <>
          <input
            className={`${styles.formInput} ${error ? styles.errorInput : ""}`}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange as (e: InputChangeEvent) => void}
          />
          {error && <div className={styles.errorText}>{error}</div>}
        </>
      )}
    </div>
  );
};

export default FormField;
