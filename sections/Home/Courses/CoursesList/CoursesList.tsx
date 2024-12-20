"use client";
import React, { useRef } from "react";
import useSWR from "swr";
import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";
import Slider from "react-slick";
import { CarouselSlider, CourseCard } from "@/components/ui";
import ACAAvailability from "@/components/ui/ACAAvailability";
import ACALoading from "@/components/ui/ACALoading";
import ACAError from "@/components/ui/ACAError";
import { CoruseProps } from "@/types/CourseProps";

interface CoursesListProps {
  activeCourses: boolean;
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};
const CoursesList: React.FC<CoursesListProps> = ({ activeCourses }) => {
  const coursesRef = useRef<Slider>(null);
  const screenSize = useScreenSize();

  const { data: courses, error } = useSWR<CoruseProps[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/courses`,
    fetcher
  );

  if (error) return <ACAError />;
  if (!courses) return <ACALoading />;
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
      generatedSliderList={courses
        ?.filter((course) => (activeCourses ? course.soon : !course.soon))
        .map((course, index) => (
          <CourseCard
            key={index}
            duration={course.duration}
            name={course.name}
            instructor={course.instructor}
            price={course.price}
            soon={course.soon}
            image={course.image}
          />
        ))}
    />
  );
};

export default CoursesList;
