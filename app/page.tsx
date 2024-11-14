import React from "react";
import InteractiveTools from "../sections/Home/InteractiveTools/InteractiveTools";
import LearningPath from "../sections/Home/LearningPath/LearningPath";
import QuizzSection from "../sections/Home/QuizzSection/QuizzSection";

const page = () => {
  return (
    <div>
      <QuizzSection />
      <LearningPath />
      <InteractiveTools />
    </div>
  );
};

export default page;
