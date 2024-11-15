"use client";
import React, { useState } from "react";
import styles from "./SliderButtons.module.css";
import Slider from "react-slick";
import { ArrowRight } from "./icons";
import ArrowLeft from "./icons/ArrowLeft";
import { LargeScreenSize, SmallScreenSize } from "@/constants/ScreenSizes";

interface SliderButtonsProps {
  sliderRef: React.RefObject<Slider>;
  buttonsPostion?: { desktop?: number; tablet?: number; mobile?: number };
}

const SliderButtons: React.FC<SliderButtonsProps> = ({
  sliderRef,
  buttonsPostion = { desktop: 60, tablet: 158, mobile: 9 },
}) => {
  const [screenSize, setScreenSize] = useState(0);

  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => sliderRef.current?.slickNext()}
        className={styles["left-arrow"]}
        style={{
          left:
            screenSize < SmallScreenSize
              ? buttonsPostion.mobile
              : screenSize < LargeScreenSize
              ? buttonsPostion.tablet
              : buttonsPostion.desktop,
        }}
      >
        <ArrowLeft
          width={
            screenSize < SmallScreenSize
              ? 40
              : screenSize < LargeScreenSize
              ? 80
              : 70
          }
          height={
            screenSize < SmallScreenSize
              ? 40
              : screenSize < LargeScreenSize
              ? 80
              : 70
          }
        />
      </div>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        style={{
          right:
            screenSize < SmallScreenSize
              ? buttonsPostion.mobile
              : screenSize < LargeScreenSize
              ? buttonsPostion.tablet
              : buttonsPostion.desktop,
        }}
        className={styles["right-arrow"]}
      >
        <ArrowRight
          width={
            screenSize < SmallScreenSize
              ? 40
              : screenSize < LargeScreenSize
              ? 80
              : 70
          }
          height={
            screenSize < SmallScreenSize
              ? 40
              : screenSize < LargeScreenSize
              ? 80
              : 70
          }
        />
      </button>
    </>
  );
};

export default SliderButtons;
