import React from "react";
import styles from "./CoursesDetails.module.css";
import { CourseInfo } from "./CourseInfo/CourseInfo";

interface CoursesDetailsProps {
  coursesData: {
    courseName: string;
    totalSteps: number;
    userSteps: number;
  }[];
}

const CoursesDetails = ({ coursesData }: CoursesDetailsProps) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>المساقات الخاصة بك</h1>
      {coursesData ? (
        <div className={styles.courses}>
          {coursesData.map((course) => (
            <CourseInfo
              key={course.courseName}
              courseName={course.courseName}
              totalSteps={course.totalSteps}
              userSteps={course.userSteps}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default CoursesDetails;
