import React from "react";
import styles from "./Hero.module.css";
import { CarouselSlider } from "@/components/ui";
import HeroComponent from "./Hero/HeroComponent";

const Hero = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };

  return (
    <div className={styles.hero}>
      <div className={styles.slider}>
        <CarouselSlider
          userSettings={settings}
          arrowsColor="white"
          buttonsPostion={{ desktop: 20, tablet: 158, mobile: 28 }}
          generatedSliderList={[1, 2].map((e, i) => (
            <HeroComponent key={i} />
          ))}
        />
      </div>
    </div>
  );
};

export default Hero;
