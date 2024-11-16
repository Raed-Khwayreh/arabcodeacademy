import {
  Feedback,
  InteractiveTools,
  LearningPath,
  QuizzSection,
  ResourcesCardSection,
} from "@/sections/Home";
import SearchBar from "@/components/ui/SearchBar/SearchBar";
import React from "react";

const page = () => {
  return (
    <>
      <ResourcesCardSection />
      <QuizzSection />
      <LearningPath />
      <InteractiveTools />
      <Feedback />
      <SearchBar />
    </>
  );
};

export default page;
