import React from "react";
import styles from "./Courses.module.css";
import { SearchBar, UnderlineText } from "@/components/ui";
import CoursesList from "./CoursesList/CoursesList";
import ACALoading from "@/components/ui/ACALoading";
import ACAError from "@/components/ui/ACAError";
import { ErrorMessage } from "@/types/ErrorMessage";
import { CourseProps } from "@/types/CourseProps";

const fetchCourses = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch {
    throw new Error(ErrorMessage.CONNECTION_FAILD);
  }
};

const Courses = async () => {
  let courses;
  try {
    const data = await fetchCourses();
    courses = data.courses;
  } catch {
    return <ACAError errorMessage={ErrorMessage.CONNECTION_FAILD} />;
  }

  if (!courses) return <ACALoading />;

  return (
    <div className={styles.courses}>
      <div className={styles["search-container"]}>
        <SearchBar placeholder="مقدمة لمحرك الألعاب اليونتي ....." />
        <UnderlineText
          title="الدورات التدريبية"
          fontWeight={700}
          paddingBottom={5}
        />
      </div>
      <div className={styles["courses-list-container"]}>
        <CoursesList
          courses={courses.filter((e: CourseProps) => e.status === "available")}
        />
      </div>
      <div className={styles["soon-container"]}>
        <UnderlineText title="قريباً" fontWeight={700} paddingBottom={5} />
      </div>
      <div className={styles["courses-list-container"]}>
        <CoursesList
          courses={courses.filter((e: CourseProps) => e.status !== "available")}
        />
      </div>
    </div>
  );
};

export default Courses;
