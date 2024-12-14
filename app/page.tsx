import {
  Courses,
  Feedback,
  Hero,
  InteractiveTools,
  LearningPath,
  QuizzSection,
  ResourcesCardSection,
  VideoSection,
} from "@/sections/Home";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <ResourcesCardSection />
      <VideoSection />
      <Courses />
      <QuizzSection />
      <LearningPath />
      <InteractiveTools />
      <Feedback isLoading={false}/>
    </>
  );
};

export default page;
