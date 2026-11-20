import {
  Courses,
  Feedback,
  Hero,
  InteractiveTools,
  QuizzSection,
  ResourcesCardSection,
  VideoSection,
} from "@/sections/Home";
import LearningPathSection from "@/sections/Home/LearningPath/LearningPathLazy";
import React from "react";

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
