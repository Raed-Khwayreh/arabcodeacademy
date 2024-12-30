"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import SliderButtons from "./SliderButtons/SliderButtons";
import styles from "./CarouselSlider.module.css";
interface CarouselSliderProps {
  userSettings: object;
  arrowsColor: string;
  generatedSliderList: JSX.Element[];
  buttonsPostion: { desktop?: number; tablet?: number; mobile?: number };
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  generatedSliderList,
  buttonsPostion,
  arrowsColor,
  userSettings,
}) => {
  const settings = {
    customPaging: function () {
      return <div className={styles.dots} />;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appendDots: (dots: any) => (
      <div className={styles["dots-container"]}>{dots}</div>
    ),
    infinite: generatedSliderList.length > 1,
    speed: 500,
    initialSlide: 0,
    arrows: false,
    ...userSettings,
  };
  const sliderRef = useRef(null);
  return (
    <>
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
    </>
  );
};

export default CarouselSlider;
