"use client";
import React, { useRef } from "react";
import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";
import Slider from "react-slick";
import { CarouselSlider, CourseCard } from "@/components/ui";
import coursesData from "../mock/coursesData";

interface CoursesListProps {
  activeCourses: boolean;
}

const CoursesList: React.FC<CoursesListProps> = ({ activeCourses }) => {
  const feedbackRef = useRef<Slider>(null);
  const screenSize = useScreenSize();
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
          ? "90%"
          : "82%"
      }
      sliderRef={feedbackRef}
      generatedSliderList={coursesData
        .filter((e) => (activeCourses ? e.soon : !e.soon))
        .map((e, i) => (
          <CourseCard
            key={i}
            duration={e.duration}
            name={e.name}
            instructor={e.instructor}
            price={e.price}
            soon={e.soon}
            image={e.image}
          />
        ))}
    />
  );
};

export default CoursesList;
