import React from "react";
import styles from "./CourseCard.module.css";
import ACAButton from "../ACAButton/ACAButton";
import CartIcon from "../ACAButton/ACAButtonIcons/CartIcon";
import EllipsisCircleIcon from "../ACAButton/ACAButtonIcons/EllipsisCircleIcon";

interface Props {
  name: string;
  price: number;
  instructor: string;
  duration: {
    vedio: number;
    hour: number;
    min: number;
  };
  book?: string;
}

const Course: React.FC<Props> = ({
  name = "اسم الكورس",
  price = 24,
  instructor = "اسم المدرب",
  duration = {
    vedio: 45,
    hour: 25,
    min: 45,
  },
  book = "شراء",
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}></div>
      <div className={styles.card_body}>
        <div className={styles.card_title}>
          <div className={styles.label}>{name}</div>
          <div className={styles.price}>${price}</div>
        </div>
        <div className={styles.card_content}>
          <div className={styles.instructor}>{instructor}</div>
          <div className={styles.duration}>
            {duration.vedio} فيديو,{duration.hour} ساعة و{duration.min} دقيقة
          </div>
        </div>
        <div className={styles.card_footer}>
          <ACAButton
            text="اقرأ المزيد"
            variant="teal"
            size="small"
            icon={<EllipsisCircleIcon width="25" height="25" />}
          />
          <ACAButton
            text={book}
            variant="tomato"
            size="small"
            icon={<CartIcon width="25" height="25" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
