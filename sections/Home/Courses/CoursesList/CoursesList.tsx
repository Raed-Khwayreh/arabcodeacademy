"use client";
import React, { useRef } from "react";
import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";
import Slider from "react-slick";
import { CarouselSlider, CourseCard } from "@/components/ui";
import ACAAvailability from "@/components/ui/ACAAvailability";
import { CourseProps } from "@/types/CourseProps";

interface CoursesListProps {
  courses: CourseProps[];
}

const CoursesList: React.FC<CoursesListProps> = ({ courses }) => {
  const coursesRef = useRef<Slider>(null);
  const screenSize = useScreenSize();

  if (courses.length === 0)
    return <ACAAvailability message="لا يوجد كورسات لعرضها" />;

  return (
    <CarouselSlider
      containerBoxShadow={false}
      carouselContainerPadding={0}
      buttonsPostion={{ desktop: 51, tablet: 144, mobile: 9 }}
      breakPoints={{
        desktop: { slidesToScroll: 4, slidesToShow: 4 },
        tablet: {
          screenSize: LargeScreenSize + 200,
          slidesToScroll: 2,
          slidesToShow: 2,
        },
        mobile: {
          screenSize: MediumScreenSize,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      }}
      carouselContainerWidth={
        screenSize < MediumScreenSize
          ? "100%"
          : screenSize < LargeScreenSize + 200
          ? 820
          : screenSize < LargeScreenSize + 400
          ? "86%"
          : "82%"
      }
      sliderRef={coursesRef}
      generatedSliderList={courses.map((course: CourseProps, index) => (
        <CourseCard key={index} courseData={course} />
      ))}
    />
  );
};

export default CoursesList;
