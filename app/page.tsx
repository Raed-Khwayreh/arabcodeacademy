import {
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
      <QuizzSection />
      <LearningPath />
      <InteractiveTools />
    </>
  );
};

export default page;
