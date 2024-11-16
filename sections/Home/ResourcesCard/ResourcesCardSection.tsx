"use client";
import CarouselSlider from "@/components/ui/CarouselSlider/CarouselSlider";
import cardData from "@/components/ui/ResourceCard/mocks/CardData";
import ResourceCard from "@/components/ui/ResourceCard/ResourceCard";
import {
  LargeScreenSize,
  MediumScreenSize,
  SmallScreenSize,
} from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";
import React, { useRef } from "react";
import Slider from "react-slick";

const ResourcesCardSection: React.FC = () => {
  const resourcesCardRef = useRef<Slider>(null);
  const screenSize = useScreenSize();

  return (
    <div style={{ marginBlock: 111 }}>
      <CarouselSlider
        containerBoxShadow={true}
        breakPoints={{
          desktop: { slidesToScroll: 3, slidesToShow: 3 },
          tablet: {
            screenSize: LargeScreenSize,
            slidesToScroll: 2,
            slidesToShow: 2,
          },
          mobile: {
            screenSize: MediumScreenSize,
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        }}
        carouselContainerWidth={
          screenSize < SmallScreenSize
            ? 204
            : screenSize < MediumScreenSize
            ? 300
            : screenSize < LargeScreenSize
            ? 720
            : 900
        }
        sliderRef={resourcesCardRef}
        generatedSliderList={cardData.map((e, i) => (
          <ResourceCard key={i} icon={e.icon} title={e.title} />
        ))}
      />
    </div>
  );
};

export default ResourcesCardSection;
