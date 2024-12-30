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

/**
 * A reusable React carousel slider component using the `react-slick` library.
 *
 * @param {object} userSettings - Custom settings for the slider to override default behavior.
 * @param {string} arrowsColor - Color for the slider navigation arrows.
 * @param {JSX.Element[]} generatedSliderList - List of elements to display in the slider.
 * @param {object} buttonsPostion - Custom positions for navigation buttons and the base container should be relative to center the buttons on this container.
 * @param {number} [buttonsPostion.desktop] - The distance between the buttons and the edge of the screen for desktop devices (in pixels).
 * @param {number} [buttonsPostion.tablet] - The distance between the buttons and the edge of the screen for tablet devices (in pixels).
 * @param {number} [buttonsPostion.mobile] - The distance between the buttons and the edge of the screen for mobile devices (in pixels).
 *
 * @returns {JSX.Element} A responsive slider component.
 *
 */

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
