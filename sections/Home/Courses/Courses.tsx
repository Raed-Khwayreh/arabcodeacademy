"use client";

import React, { useRef } from "react";
import styles from "./Courses.module.css";
import {
  CarouselSlider,
  CourseCard,
  SearchBar,
  UnderlineText,
} from "@/components/ui";
import Slider from "react-slick";
import useScreenSize from "@/utils/useScreenSize";
import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import coursesData from "./mock/coursesData";

const Courses = () => {
  const feedbackRef = useRef<Slider>(null);
  const screenSize = useScreenSize();

  return (
    <div style={{ marginBlock: 111, color: "black" }}>
      <div className={styles["search-container"]}>
        <SearchBar />
        <UnderlineText
          title="الدورات التدريبية"
          fontWeight={700}
          paddingBottom={5}
        />
      </div>
      <CarouselSlider
        containerBoxShadow={false}
        carouselContainerPadding={20}
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
        generatedSliderList={coursesData.map((e, i) => (
          <CourseCard
            key={i}
            duration={e.duration}
            name={e.name}
            instructor={e.instructor}
            price={e.price}
            soon={true}
          />
        ))}
      />
    </div>
  );
};

export default Courses;
