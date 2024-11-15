"use client";
import CarouselSlider from "@/components/ui/CarouselSlider/CarouselSlider";
import cardData from "@/components/ui/ResourceCard/mocks/CardData";
import ResourceCard from "@/components/ui/ResourceCard/ResourceCard";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

const ResourcesCardSection = () => {
  const resourcesCardRef = useRef<Slider>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 1200);
    setIsTablet(window.innerWidth < 1442);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
      setIsTablet(window.innerWidth < 1442);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <CarouselSlider
      breakPoints={{
        desktop: { slidesToScroll: 3, slidesToShow: 3 },
        tablet: { screenSize: 1442, slidesToScroll: 2, slidesToShow: 2 },
        mobile: { screenSize: 1200, slidesToScroll: 1, slidesToShow: 1 },
      }}
      carouselContainerWidth={isMobile ? 300 : isTablet ? 720 : 900}
      sliderRef={resourcesCardRef}
      generatedSliderList={cardData.map((e, i) => (
        <ResourceCard key={i} icon={e.icon} title={e.title} />
      ))}
    />
  );
};

export default ResourcesCardSection;
