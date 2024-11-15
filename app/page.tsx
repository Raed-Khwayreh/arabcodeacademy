import {
  InteractiveTools,
  LearningPath,
  QuizzSection,
  ResourcesCardSection,
} from "@/sections/Home";
import SearchBar from "@/sections/Home/SearchBar/SearchBar";
import TitleSection from "@/sections/Home/SectionTitle/TitleSection";
import React from "react";

const page = () => {
  return (
    <>
      <ResourcesCardSection />
      <QuizzSection />
      <LearningPath />
      <InteractiveTools />
      <div style={{ margin: 200 }}>
        <SearchBar />
      </div>
      <div style={{ margin: 200 }}>
        <TitleSection title="الدورات" />
      </div>
    </>
  );
};

export default page;
