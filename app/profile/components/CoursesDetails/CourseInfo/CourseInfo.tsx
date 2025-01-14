import React from "react";
import styles from "./CourseInfo.module.css";
import { ArrowUp, ContinueIcon } from "@/app/profile/icons";
import { ACAButton } from "@/components/ui";
import { percentageOfCompletion } from "./utils/percentageOfCompletion";

interface CourseInfoProps {
  courseName: string;
  totalSteps: number;
  userSteps: number;
}

export const CourseInfo = ({
  courseName,
  totalSteps,
  userSteps,
}: CourseInfoProps) => {
  const complete = percentageOfCompletion(userSteps, totalSteps);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <div className={styles["arrow-up"]}>
            <ArrowUp />
          </div>
          <ACAButton
            boxShadow="0px 4px 4px 0px #00000040"
            size={"small"}
            text="استئناف"
            variant="tomato"
            icon={<ContinueIcon />}
          />
        </div>
        <div className={styles.texts}>
          <p className={styles["course-name"]}>{courseName}</p>
          <p
            className={styles["complete"]}
          >{`steps${userSteps}/${totalSteps} Complete${complete}%`}</p>
        </div>
      </div>
      <p
        className={styles["complete-small-screen"]}
      >{`steps${userSteps}/${totalSteps} Complete${complete}%`}</p>
      <div
        style={
          {
            "--progress-width": `${complete}%`,
          } as React.CSSProperties
        }
        className={styles.process}
      />
    </div>
  );
};
