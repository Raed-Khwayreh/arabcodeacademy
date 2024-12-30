"use client";
import React from "react";
import { CarouselSlider } from "@/components/ui";
import ACAAvailability from "@/components/ui/ACAAvailability";
import { FeedBackProps } from "@/types/FeedBackProps";
import FeedbackCardComponent from "@/components/ui/FeedbackCard/FeedbackCard";
import styles from "./../Feedback.module.css";

interface CoursesListProps {
  reviews: FeedBackProps[];
}

const FeedbackList: React.FC<CoursesListProps> = ({ reviews }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (reviews.length === 0)
    return <ACAAvailability message="لا يوجد بيانات لعرضها" />;

  return (
    <div className={styles["slider-container"]}>
      <CarouselSlider
        userSettings={settings}
        arrowsColor={"var(--primary-color)"}
        buttonsPostion={{ desktop: 63, tablet: 34, mobile: 12 }}
        generatedSliderList={reviews.map((feedback, index) => (
          <FeedbackCardComponent key={index} feedback={feedback} />
        ))}
      />
    </div>
  );
};

export default FeedbackList;
