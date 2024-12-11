"use client";
import CarouselSlider from "@/components/ui/CarouselSlider/CarouselSlider";
import FeedbackCardComponent from "@/components/ui/FeedbackCard/FeedbackCard";

import { LargeScreenSize, MediumScreenSize } from "@/constants/ScreenSizes";
import useScreenSize from "@/utils/useScreenSize";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import { user1, user2, user3 } from "@/components/ui/FeedbackCard/Images";

interface Feedback {
  name: string;
  image: string; 
  rating: number;
  comment: string;
  date: string;
}

const imageMapping: Record<string, StaticImageData> = {
  user1,
  user2,
  user3,
};

const Feedback: React.FC = () => {
  const feedbackRef = useRef<Slider>(null);
  const screenSize = useScreenSize();
  const [feedbackData, setFeedbackData] = useState<Feedback[]>([]); 

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("http://localhost:3001/feedback");
        const data = await response.json();
        setFeedbackData(data); 
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      }
    };

    fetchFeedback();
  }, []);

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
            image={imageMapping[feedback.image]}
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
