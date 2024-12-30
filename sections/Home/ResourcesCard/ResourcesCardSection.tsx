"use client";
import CarouselSlider from "@/components/ui/CarouselSlider/CarouselSlider";
import cardData from "@/components/ui/ResourceCard/mocks/CardData";
import ResourceCard from "@/components/ui/ResourceCard/ResourceCard";
import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import React from "react";
import styles from "./ResourcesCardSection.module.css";

const ResourcesCardSection: React.FC = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: LargeScreenSize,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: MediumScreenSize,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.main}>
      <div className={styles["slider-container"]}>
        <CarouselSlider
          buttonsPostion={{ desktop: 69, mobile: 32, tablet: 158 }}
          userSettings={settings}
          arrowsColor={"var(--primary-color)"}
          generatedSliderList={cardData.map((e, i) => (
            <ResourceCard key={i} icon={e.icon} title={e.title} href={e.href} />
          ))}
        />
      </div>
    </div>
  );
};

export default ResourcesCardSection;
