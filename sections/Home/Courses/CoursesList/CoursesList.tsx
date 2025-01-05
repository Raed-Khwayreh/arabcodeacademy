"use client";
import React from "react";
import styles from "./../Courses.module.css";

import { CarouselSlider, CourseCard } from "@/components/ui";
import ACAAvailability from "@/components/ui/ACAAvailability";
import { CourseProps } from "@/types/CourseProps";
interface CoursesListProps {
  courses: CourseProps[];
}

const CoursesList: React.FC<CoursesListProps> = ({ courses }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 2080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (courses.length === 0)
    return <ACAAvailability message="لا يوجد كورسات لعرضها" />;

  return (
    <div className={styles["slider-container"]}>
      <CarouselSlider
        userSettings={settings}
        arrowsColor={"var(--primary-color)"}
        buttonsPostion={{ desktop: 51, tablet: 144, mobile: 9 }}
        generatedSliderList={courses.map((course: CourseProps, index) => (
          <CourseCard key={index} courseData={course} />
        ))}
      />
    </div>
  );
};

export default CoursesList;
