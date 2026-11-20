"use client";
import ACALoading from "@/components/ui/ACALoading";
import dynamic from "next/dynamic";

// `ssr: false` is only allowed inside Client Components (Next.js 15+).
const FeedbackListLazy = dynamic(() => import("./FeedbackList"), {
  loading: () => <ACALoading />,
  ssr: false,
});

export default FeedbackListLazy;
