"use client";
import React from "react";
import Slider from "react-slick";
import SliderButtons from "./SliderButtons/SliderButtons";
import ResourceCard from "../ResourceCard/ResourceCard";

interface CarouselSliderProps {
  carouselContainerWidth?: number;
  carouselContainerPadding?: number;
  generatedSliderList?: JSX.Element[];
  sliderRef: React.RefObject<Slider>;
  breakPoints?: {
    desktop: {
      slidesToShow?: number;
      slidesToScroll?: number;
    };
    tablet: {
      screenSize: number;
      slidesToShow?: number;
      slidesToScroll?: number;
    };
    mobile: {
      screenSize: number;
      slidesToShow?: number;
      slidesToScroll?: number;
    };
  };
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  carouselContainerWidth = "90%",
  carouselContainerPadding = 10,
  sliderRef,
  generatedSliderList = [],
  breakPoints = {
    desktop: { slidesToScroll: 4, slidesToShow: 4 },
    tablet: { slidesToScroll: 2, slidesToShow: 2 },
    mobile: { slidesToScroll: 1, slidesToShow: 1 },
  },
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: breakPoints.desktop?.slidesToShow,
    slidesToScroll: breakPoints.desktop?.slidesToScroll,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: breakPoints.tablet.screenSize!,
        settings: {
          slidesToShow: breakPoints.tablet?.slidesToShow,
          slidesToScroll: breakPoints.tablet?.slidesToScroll,
        },
      },
      {
        breakpoint: breakPoints.mobile.screenSize!,
        settings: {
          slidesToShow: breakPoints.mobile?.slidesToShow,
          slidesToScroll: breakPoints.mobile?.slidesToScroll,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
        style={{
          width: carouselContainerWidth,
          margin: "auto",
          padding: carouselContainerPadding,
          marginBlock: 20,
          boxShadow: "0 0 25px -2px #7f7f7f",
          borderRadius: 10,
        }}
      >
        <SliderButtons sliderRef={sliderRef} />
        <Slider ref={sliderRef} {...settings}>
          {generatedSliderList}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSlider;
