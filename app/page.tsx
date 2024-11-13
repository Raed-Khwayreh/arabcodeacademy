import React from "react";
import InteractiveTools from "../sections/Home/InteractiveTools/InteractiveTools";
import LearningPath from "../sections/Home/LearningPath/LearningPath";
import QuizzSection from "../sections/Home/QuizzSection/QuizzSection";
import coursesData from "@/data/coursesData";
import Course from "@/components/ui/CourseCard/CourseCard";

const page = () => {
  return (
    <div>
      <QuizzSection />
      <LearningPath />
      <InteractiveTools />
      {coursesData.map(course => <Course key={course.id} {...course} />)}
    </div>
  );
};

export default page;
