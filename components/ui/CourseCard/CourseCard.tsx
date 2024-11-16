"use client";
import React from "react";
import styles from "./CourseCard.module.css";
import ACAButton from "../ACAButton/ACAButton";
import CartIcon from "../ACAButton/ACAButtonIcons/CartIcon";
import EllipsisCircleIcon from "../ACAButton/ACAButtonIcons/EllipsisCircleIcon";
import useScreenSize from "@/utils/useScreenSize";
import { SoonLargeIcon, SoonSmallIcon } from "./icons";
import Image from "next/image";
import { CoruseProps } from "@/types/CourseProps";

const CourseCard: React.FC<CoruseProps> = ({
  name = "اسم الكورس",
  price = 24,
  instructor = "اسم المدرب",
  duration = {
    video: 45,
    hour: 25,
    min: 45,
  },
  book = "شراء",
  soon = false,
  image = "/images/courses/default-course.png",
}) => {
  const screenSize = useScreenSize();

  return (
    <div className={styles.card}>
      {soon ? (
        <div className={styles.soon}>
          {screenSize > 768 ? <SoonLargeIcon /> : <SoonSmallIcon />}
        </div>
      ) : (
        <></>
      )}
      <div className={styles["avatar-container"]}>
        <div className={styles.avatar}>
          <Image alt="course-image" src={image} width={180} height={100} />
        </div>
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_title}>
          <div className={styles.label}>{name}</div>
          <div className={styles.price}>${price}</div>
        </div>
        <div className={styles.card_content}>
          <div className={styles.instructor}>{instructor}</div>
          <div className={styles.duration}>
            {duration.video} فيديو,{duration.hour} ساعة و{duration.min} دقيقة
          </div>
        </div>
        <div className={styles.card_footer}>
          <ACAButton
            text="اقرأ المزيد"
            variant="teal"
            size="small"
            icon={<EllipsisCircleIcon width={25} height={25} />}
          />
          <ACAButton
            text={book}
            variant="tomato"
            size="small"
            icon={<CartIcon width={25} height={25} />}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
