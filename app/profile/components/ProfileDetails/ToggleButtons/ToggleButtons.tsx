import React from "react";
import styles from "./ToggleButtons.module.css";
import { CheckIcon } from "../icons";
import { ChalkboardTeacherIcon } from "@/public/icons";

interface ToggleButtonsProps {
  coursesNum: number;
  completedCourses: number;
  activeToggleButton: 1 | 2;
  onToggle: () => void;
}

const ToggleButtons = ({
  activeToggleButton,
  onToggle,
  coursesNum,
  completedCourses,
}: ToggleButtonsProps) => {
  return (
    <div className={styles["toggle-container"]}>
      {[1, 2].map((buttonIndex) => (
        <button
          key={buttonIndex}
          onClick={onToggle}
          className={`${styles["toggle-button"]} ${
            activeToggleButton == buttonIndex ? styles["active-button"] : ""
          }`}
        >
          <div className={styles["toggle-button-label"]}>
            <h1>{buttonIndex === 1 ? "مكتملة" : "المساقات"}</h1>
            {buttonIndex == 1 ? (
              <CheckIcon
                color={
                  activeToggleButton == buttonIndex
                    ? "white"
                    : "var(--primary-color)"
                }
              />
            ) : (
              <ChalkboardTeacherIcon
                color={
                  activeToggleButton == buttonIndex
                    ? "white"
                    : "var(--primary-color)"
                }
              />
            )}
          </div>
          <span>{buttonIndex === 1 ? completedCourses : coursesNum}</span>
        </button>
      ))}
    </div>
  );
};

export default ToggleButtons;
