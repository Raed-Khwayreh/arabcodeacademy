import React from "react";
import styles from "./Courses.module.css";
import { SearchBar, UnderlineText } from "@/components/ui";
import CoursesList from "./CoursesList/CoursesList";

const Courses = () => {
  return (
    <div style={{ color: "black", marginBlock: 123 }}>
      <div className={styles["search-container"]}>
        <SearchBar />
        <UnderlineText
          title="الدورات التدريبية"
          fontWeight={700}
          paddingBottom={5}
        />
      </div>
      <CoursesList activeCourses={false} isLoading={false} />
      <div className={styles["soon-container"]}>
        <UnderlineText title="قريباً" fontWeight={700} paddingBottom={5} />
      </div>
      <div style={{ marginBottom: 61 }}>
        <CoursesList activeCourses={true} isLoading={false} />
      </div>
    </div>
  );
};

export default Courses;
