"use client";
import React from "react";
import Slider from "react-slick";
import SliderButtons from "./SliderButtons/SliderButtons";
import styles from "./CarouselSlider.module.css";
interface CarouselSliderProps {
  carouselContainerWidth?: number | string;
  carouselContainerPadding?: number;
  generatedSliderList?: JSX.Element[];
  sliderRef: React.RefObject<Slider>;
  containerBoxShadow?: boolean;
  buttonsPostion?: { desktop?: number; tablet?: number; mobile?: number };
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
  containerBackgroundColor?: string;
  arrowsColor?: string;
  showDots?: boolean;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  showDots = false,
  carouselContainerWidth = "90%",
  carouselContainerPadding = 10,
  containerBackgroundColor = "white",
  buttonsPostion = { desktop: 60, tablet: 158, mobile: 9 },
  containerBoxShadow = false,
  sliderRef,
  generatedSliderList = [],
  breakPoints = {
    desktop: { slidesToScroll: 4, slidesToShow: 4 },
    tablet: { slidesToScroll: 2, slidesToShow: 2 },
    mobile: { slidesToScroll: 1, slidesToShow: 1 },
  },
  arrowsColor,
}) => {
  const settings = {
    customPaging: function () {
      return <div className={styles.dots} />;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appendDots: (dots: any) => (
      <div className={styles["dots-container"]}>{dots}</div>
    ),
    dots: showDots,
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
    <div
      style={{
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: carouselContainerWidth,
          margin: "auto",
          padding: carouselContainerPadding,
          background: containerBackgroundColor,
          boxShadow: containerBoxShadow ? "0 0 25px -2px #7f7f7f" : "none",
          borderRadius: 10,
        }}
      >
        <SliderButtons
          arrowsColor={arrowsColor}
          buttonsPostion={{
            desktop: buttonsPostion?.desktop,
            tablet: buttonsPostion?.tablet,
            mobile: buttonsPostion?.mobile,
          }}
          sliderRef={sliderRef}
        />
        <Slider ref={sliderRef} {...settings}>
          {generatedSliderList}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSlider;
