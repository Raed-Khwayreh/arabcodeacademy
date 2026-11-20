"use client";
import { ACALoading } from "@/components/ui";
import dynamic from "next/dynamic";

// `ssr: false` is only allowed inside Client Components (Next.js 15+).
const LearningPathLazy = dynamic(() => import("./LearningPath"), {
  loading: () => <ACALoading />,
  ssr: false,
});

export default LearningPathLazy;
