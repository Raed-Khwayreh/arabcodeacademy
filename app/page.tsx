import {
  Courses,
  Feedback,
  InteractiveTools,
  LearningPath,
  QuizzSection,
  ResourcesCardSection,
} from "@/sections/Home";
import React from "react";

const page = () => {
  return (
    <>
      <ResourcesCardSection />
      <Courses />
      <QuizzSection />
      <LearningPath />
      <InteractiveTools />
      
      <Feedback />
    </>
  );
};

export default page;
