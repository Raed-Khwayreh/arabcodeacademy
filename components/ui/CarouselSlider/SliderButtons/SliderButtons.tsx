"use client";
import React, { useState } from "react";
import styles from "./SliderButtons.module.css";
import Slider from "react-slick";
import { ArrowRight } from "./icons";
import ArrowLeft from "./icons/ArrowLeft";

interface SliderButtonsProps {
  sliderRef: React.RefObject<Slider>;
  buttonsPostion?: { desktop?: number; tablet?: number; mobile?: number };
}

const SliderButtons: React.FC<SliderButtonsProps> = ({
  sliderRef,
  buttonsPostion = { desktop: 60, tablet: 158, mobile: 9 },
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
      setIsTablet(window.innerWidth < 1225);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div
        onClick={() => sliderRef.current?.slickNext()}
        className={styles["left-arrow"]}
        style={{
          left: isMobile
            ? buttonsPostion.mobile
            : isTablet
            ? buttonsPostion.tablet
            : buttonsPostion.desktop,
        }}
      >
        <ArrowLeft
          width={isMobile ? 40 : isTablet ? 80 : 70}
          height={isMobile ? 40 : isTablet ? 80 : 70}
        />
      </div>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        style={{
          right: isMobile
            ? buttonsPostion.mobile
            : isTablet
            ? buttonsPostion.tablet
            : buttonsPostion.desktop,
        }}
        className={styles["right-arrow"]}
      >
        <ArrowRight
          width={isMobile ? 40 : isTablet ? 80 : 70}
          height={isMobile ? 40 : isTablet ? 80 : 70}
        />
      </button>
    </>
  );
};

export default SliderButtons;
