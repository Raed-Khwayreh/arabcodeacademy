import { CarouselSlider, ResourceCard } from "@/components/ui";
import React from "react";
import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import cardData from "@/components/ui/ResourceCard/mocks/CardData";
const ResourcesList = () => {
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
    <CarouselSlider
      buttonsPostion={{ desktop: 69, mobile: 32, tablet: 158 }}
      userSettings={settings}
      arrowsColor={"var(--primary-color)"}
      generatedSliderList={cardData.map((e, i) => (
        <ResourceCard key={i} icon={e.icon} title={e.title} href={e.href} />
      ))}
    />
  );
};
export default ResourcesList;
