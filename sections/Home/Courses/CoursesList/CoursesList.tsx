"use client";
import React, { useEffect, useState, useRef } from "react";
import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";
import Slider from "react-slick";
import { CarouselSlider, CourseCard } from "@/components/ui";
import ACALoading from "@/components/ui/ACALoading";
import ACAError from "@/components/ui/ACAError";
import ACAAvailability from "@/components/ui/ACAAvailability";
import { CoruseProps } from "@/types/CourseProps";

interface CoursesListProps {
  activeCourses: boolean;
  isLoading: boolean;
}

const CoursesList: React.FC<CoursesListProps> = ({
  activeCourses,
  isLoading: parentLoading,
}) => {
  const coursesRef = useRef<Slider>(null);
  const screenSize = useScreenSize();
  const [courses, setCourses] = useState<CoruseProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [coursesError, setCoursesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/courses`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setCoursesError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (parentLoading || loading) return <ACALoading />;

  if (coursesError) return <ACAError />;

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
