"use client";
import React, { useState } from "react";
import styles from "./SliderButtons.module.css";
import Slider from "react-slick";
import { ArrowRight } from "./icons";
import ArrowLeft from "./icons/ArrowLeft";

interface SliderButtonsProps {
  sliderRef: React.RefObject<Slider>;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({ sliderRef }) => {
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
        style={{ left: isMobile ? 9 : isTablet ? 158 : 60 }}
      >
        <ArrowLeft
          width={isMobile ? 40 : isTablet ? 80 : 70}
          height={isMobile ? 40 : isTablet ? 80 : 70}
        />
      </div>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        style={{ right: isMobile ? 9 : isTablet ? 158 : 60 }}
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
