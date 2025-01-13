import React from "react";
import styles from "./Courses.module.css";
import { ACAError, ACALoading, SearchBar, UnderlineText } from "@/components/ui";

import { ErrorMessage } from "@/types/ErrorMessage";
import { CourseProps } from "@/types/CourseProps";
import dynamic from "next/dynamic";

const fetchCourses = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch {
    throw new Error(ErrorMessage.CONNECTION_FAILD);
  }
};

const CoursesListLazyComponent = dynamic(
  () => import("./CoursesList/CoursesList"),
  {
    loading: () => <ACALoading />,
    ssr: false,
  }
);

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
    <section className={styles.courses}>
      <div className={styles["search-container"]}>
        <SearchBar placeholder="مقدمة لمحرك الألعاب اليونتي ....." />
        <UnderlineText
          title="الدورات التدريبية"
          fontWeight={700}
          paddingBottom={5}
        />
      </div>
      <div className={styles["courses-list-container"]}>
        <CoursesListLazyComponent
          courses={courses.filter((e: CourseProps) => e.status === "available")}
        />
      </div>
      <div className={styles["soon-container"]}>
        <UnderlineText title="قريباً" fontWeight={700} paddingBottom={5} />
      </div>
      <div className={styles["courses-list-container"]}>
        <CoursesListLazyComponent
          courses={courses.filter((e: CourseProps) => e.status !== "available")}
        />
      </div>
    </section>
  );
};

export default Courses;
