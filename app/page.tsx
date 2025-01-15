import { ACALoading } from "@/components/ui";
import {
  Courses,
  Feedback,
  Hero,
  InteractiveTools,
  QuizzSection,
  ResourcesCardSection,
  VideoSection,
} from "@/sections/Home";
import dynamic from "next/dynamic";
import React from "react";

const LearningPathSection = dynamic(
  () => import("@/sections/Home/LearningPath/LearningPath"),
  {
    loading: () => <ACALoading />,
    ssr: false,
  }
);

const page = () => {
  return (
    <>
      <Hero />
      <ResourcesCardSection />
      <VideoSection />
      <Courses />
      <QuizzSection />
      <LearningPathSection />
      <InteractiveTools />
      <Feedback />
    </>
  );
};

export default page;
