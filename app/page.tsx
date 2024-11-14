import React from "react";
import InteractiveTools from "../sections/Home/InteractiveTools/InteractiveTools";
import LearningPath from "../sections/Home/LearningPath/LearningPath";
import QuizzSection from "../sections/Home/QuizzSection/QuizzSection";
import TitleSection from "../sections/Home/SectionTitle/TitleSection";
import SearchBar from "../sections/Home/SearchBar/SearchBar";

const page = () => {
  return (
    <div>
<SearchBar></SearchBar>
      {/* <QuizzSection />
      <LearningPath />
      <InteractiveTools /> */}
    </div>
  );
};

export default page;
