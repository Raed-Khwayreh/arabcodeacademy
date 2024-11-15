"use client";
import React from "react";
import Slider from "react-slick";
import SliderButtons from "./SliderButtons/SliderButtons";

interface CarouselSliderProps {
  carouselContainerWidth?: number;
  carouselContainerPadding?: number;
  generatedSliderList?: JSX.Element[];
  sliderRef: React.RefObject<Slider>;
  breakPoints?: {
    desktop?: {
      slidesToShow?: number;
      slidesToScroll?: number;
    };
    tablet?: {
      screenSize?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
    };
    mobile?: {
      screenSize?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
    };
  };
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  carouselContainerWidth = "90%",
  carouselContainerPadding = 30,
  sliderRef,
  generatedSliderList = [],
  breakPoints = {
    desktop: { slidesToScroll: 4, slidesToShow: 4 },
    tablet: { screenSize: 1400, slidesToScroll: 2, slidesToShow: 2 },
    mobile: { screenSize: 768, slidesToScroll: 1, slidesToShow: 1 },
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
        breakpoint: breakPoints.tablet!.screenSize!,
        settings: {
          slidesToShow: breakPoints.desktop?.slidesToShow,
          slidesToScroll: breakPoints.desktop?.slidesToScroll,
        },
      },
      {
        breakpoint: breakPoints.mobile!.screenSize!,
        settings: {
          slidesToShow: breakPoints.desktop?.slidesToShow,
          slidesToScroll: breakPoints.desktop?.slidesToScroll,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: carouselContainerWidth,
        margin: "auto",
        padding: carouselContainerPadding,
      }}
    >
      <SliderButtons sliderRef={sliderRef} />
      <Slider ref={sliderRef} {...settings}>
        {generatedSliderList}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
