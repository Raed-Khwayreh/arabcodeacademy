"use client";

import React, { useRef } from "react";
import styles from "./Hero.module.css";
import Slider from "react-slick";
import { CarouselSlider } from "@/components/ui";
import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import HeroComponent from "./Hero/HeroComponent";

const Hero = () => {
  const coursesRef = useRef<Slider>(null);

  return (
    <div className={styles.hero}>
      <CarouselSlider
        showDots={true}
        containerBackgroundColor="transparent"
        arrowsColor="white"
        carouselContainerPadding={0}
        buttonsPostion={{ desktop: 73, tablet: 158, mobile: 28 }}
        breakPoints={{
          desktop: { slidesToScroll: 1, slidesToShow: 1 },
          tablet: {
            screenSize: LargeScreenSize + 200,
            slidesToScroll: 1,
            slidesToShow: 1,
          },
          mobile: {
            screenSize: MediumScreenSize,
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        }}
        sliderRef={coursesRef}
        generatedSliderList={[1, 2].map((e, i) => (
          <HeroComponent key={i} />
        ))}
      />
    </div>
  );
};

export default Hero;
