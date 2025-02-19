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
  arrowsColor?: string;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({
  arrowsColor,
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
      <button
        aria-label="left-arrow"
        onClick={() => sliderRef.current?.slickPrev()}
        className={styles["left-arrow"]}
        style={{
          left: buttonsSpace,
        }}
      >
        <ArrowLeft color={arrowsColor} width={iconSize} height={iconSize} />
      </button>
      <button
        aria-label="right-arrow"
        onClick={() => sliderRef.current?.slickNext()}
        style={{
          right: buttonsSpace,
        }}
        className={styles["right-arrow"]}
      >
        <ArrowRight color={arrowsColor} width={iconSize} height={iconSize} />
      </button>
    </>
  );
};

export default SliderButtons;
