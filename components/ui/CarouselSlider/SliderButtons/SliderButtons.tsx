"use client";
import React from "react";
import styles from "./SliderButtons.module.css";
import Slider from "react-slick";
import { ArrowRight } from "./icons";
import ArrowLeft from "./icons/ArrowLeft";
import { LargeScreenSize, SmallScreenSize } from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";

interface SliderButtonsProps {
  sliderRef: React.RefObject<Slider>;
  buttonsPostion?: { desktop?: number; tablet?: number; mobile?: number };
}

const SliderButtons: React.FC<SliderButtonsProps> = ({
  sliderRef,
  buttonsPostion = { desktop: 60, tablet: 158, mobile: 9 },
}) => {
  const screenSize = useScreenSize();
  const iconSize =
    screenSize < SmallScreenSize ? 40 : screenSize < LargeScreenSize ? 80 : 70;
  const buttonsSpace =
    screenSize < SmallScreenSize
      ? buttonsPostion.mobile
      : screenSize < LargeScreenSize
      ? buttonsPostion.tablet
      : buttonsPostion.desktop;

  return (
    <>
      <div
        onClick={() => sliderRef.current?.slickPrev()}
        className={styles["left-arrow"]}
        style={{
          left: buttonsSpace,
        }}
      >
        <ArrowLeft width={iconSize} height={iconSize} />
      </div>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        style={{
          right: buttonsSpace,
        }}
        className={styles["right-arrow"]}
      >
        <ArrowRight width={iconSize} height={iconSize} />
      </button>
    </>
  );
};

export default SliderButtons;
