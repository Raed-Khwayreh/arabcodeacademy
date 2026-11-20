"use client";
import { ACALoading } from "@/components/ui";
import dynamic from "next/dynamic";

// `ssr: false` is only allowed inside Client Components (Next.js 15+).
const CoursesListLazy = dynamic(() => import("./CoursesList"), {
  loading: () => <ACALoading />,
  ssr: false,
});

export default CoursesListLazy;
