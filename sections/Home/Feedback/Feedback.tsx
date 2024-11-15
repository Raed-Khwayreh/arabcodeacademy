"use client";
import CarouselSlider from "@/components/ui/CarouselSlider/CarouselSlider";
import FeedbackCardComponent from "@/components/ui/FeedbackCard/FeedbackCard";
import { feedbackData } from "@/components/ui/FeedbackCard/mocks/FeedbackData";

import {
  LargeScreenSize,
  MediumScreenSize,
  SmallScreenSize,
} from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";
import React, { useRef } from "react";
import Slider from "react-slick";

const Feedback: React.FC = () => {
  const feedbackRef = useRef<Slider>(null);
  const screenSize = useScreenSize();

  return (
    <CarouselSlider
      containerBoxShadow={false}
      breakPoints={{
        desktop: { slidesToScroll: 3, slidesToShow: 3 },
        tablet: {
          screenSize: LargeScreenSize + 340,
          slidesToScroll: 2,
          slidesToShow: 2,
        },
        mobile: {
          screenSize: MediumScreenSize + 100,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      }}
      carouselContainerWidth={
        screenSize < SmallScreenSize
          ? "100%"
          : screenSize < MediumScreenSize + 100
          ? "60%"
          : screenSize < LargeScreenSize + 340
          ? "60%"
          : "70%"
      }
      sliderRef={feedbackRef}
      generatedSliderList={feedbackData.map((e, i) => (
        <FeedbackCardComponent
          key={i}
          image={e.image}
          comment={e.comment}
          date={e.date}
          name={e.name}
          rating={e.rating}
        />
      ))}
    />
  );
};

export default Feedback;
