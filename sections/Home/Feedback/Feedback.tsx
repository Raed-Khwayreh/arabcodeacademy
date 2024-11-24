"use client";
import CarouselSlider from "@/components/ui/CarouselSlider/CarouselSlider";
import FeedbackCardComponent from "@/components/ui/FeedbackCard/FeedbackCard";
import { feedbackData } from "@/components/ui/FeedbackCard/mocks/FeedbackData";

import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";
import React, { useRef } from "react";
import Slider from "react-slick";

const Feedback: React.FC = () => {
  const feedbackRef = useRef<Slider>(null);
  const screenSize = useScreenSize();

  return (
    <div style={{ marginBlock: 111 }}>
      <CarouselSlider
        containerBoxShadow={false}
        buttonsPostion={{ desktop: 63, tablet: 34, mobile: 12 }}
        breakPoints={{
          desktop: { slidesToScroll: 3, slidesToShow: 3 },
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
            : 1280
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
    </div>
  );
};

export default Feedback;
