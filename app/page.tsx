import React from "react";
import InteractiveTools from "../sections/Home/InteractiveTools/InteractiveTools";
import LearningPath from "../sections/Home/LearningPath/LearningPath";
import QuizzSection from "../sections/Home/QuizzSection/QuizzSection";
import ResourceCard from "@/components/ui/ResourceCard/ResourceCard";
import cardData from "@/components/ui/ResourceCard/mocks/CardData";

const page = () => {
  return (
    <div>
       {cardData.map((item, index) => (
          <ResourceCard
            key={index}
            title={item.title}
            icon={item.icon}
          />
        ))}
      <div>


    </div>
      <QuizzSection />
      <LearningPath />
      <InteractiveTools />
    </div>
  );
};

export default page;
