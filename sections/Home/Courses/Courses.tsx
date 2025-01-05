"use client";
import React from "react";
import styles from "./Courses.module.css";
import { SearchBar, UnderlineText } from "@/components/ui";
import CoursesList from "./CoursesList/CoursesList";
import ACALoading from "@/components/ui/ACALoading";
import ACAError from "@/components/ui/ACAError";
import { ErrorMessage } from "@/types/ErrorMessage";
import { CourseProps } from "@/types/CourseProps";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

const Courses = () => {
  const { data: courses, error } = useSWR<{ courses: CourseProps[] }>(
    `${process.env.NEXT_PUBLIC_API_URL}/courses`,
    fetcher
  );

  if (error) return <ACAError errorMessage={ErrorMessage.CONNECTION_FAILD} />;
  if (!courses) return <ACALoading />;

  return (
    <div style={{ color: "black", marginBlock: 123 }}>
      <div className={styles["search-container"]}>
        <SearchBar placeholder="مقدمة لمحرك الألعاب اليونتي ....." />
        <UnderlineText
          title="الدورات التدريبية"
          fontWeight={700}
          paddingBottom={5}
        />
      </div>
      <CoursesList
        courses={courses.courses.filter((e) => e.status === "available")}
      />
      <div className={styles["soon-container"]}>
        <UnderlineText title="قريباً" fontWeight={700} paddingBottom={5} />
      </div>
      <div style={{ marginBottom: 61 }}>
        <CoursesList
          courses={courses.courses.filter((e) => e.status !== "available")}
        />
      </div>
    </div>
  );
};

export default Courses;
