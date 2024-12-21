"use client";
import CarouselSlider from "@/components/ui/CarouselSlider/CarouselSlider";
import FeedbackCardComponent, {
  FeedbackProps,
} from "@/components/ui/FeedbackCard/FeedbackCard";

import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";
import React, { useRef } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import { user1, user2, user3 } from "@/components/ui/FeedbackCard/Images";
import ACALoading from "@/components/ui/ACALoading";
import ACAError from "@/components/ui/ACAError";
import ACAAvailability from "@/components/ui/ACAAvailability";
import useSWR from "swr";

const imageMapping: Record<string, StaticImageData> = {
  user1,
  user2,
  user3,
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

const Feedback: React.FC= ({
}) => {
  const feedbackRef = useRef<Slider>(null);
  const screenSize = useScreenSize();
  const { data: feedbackData, error } = useSWR<FeedbackProps[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/feedback`,
    fetcher
  );

  if (error) return <ACAError />;
  if (!feedbackData) return <ACALoading />;
  if (feedbackData.length === 0)
    return <ACAAvailability message="لا يوجد بيانات لعرضها" />;



  return (
    <div style={{ marginBlock: 111 }}>
      <CarouselSlider
        containerBoxShadow={false}
        buttonsPostion={{ desktop: 63, tablet: 34, mobile: 12 }}
        breakPoints={{
          desktop: { slidesToScroll: 3, slidesToShow: 3 },
          tablet: {
            screenSize: LargeScreenSize + 200,
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
          screenSize < MediumScreenSize
            ? "100%"
            : screenSize < LargeScreenSize + 200
            ? 820
            : 1280
        }
        sliderRef={feedbackRef}
        generatedSliderList={feedbackData.map((feedback, index) => (
          <FeedbackCardComponent
            key={index}
            image={
              typeof feedback.image === "string"
                ? imageMapping[feedback.image]
                : feedback.image
            }
            comment={feedback.comment}
            date={feedback.date}
            name={feedback.name}
            rating={feedback.rating}
          />
        ))}
      />
    </div>
  );
};

export default Feedback;
