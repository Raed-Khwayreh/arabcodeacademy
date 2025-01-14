import React from "react";
import styles from "./CourseCard.module.css";
import ACAButton from "../ACAButton/ACAButton";
import CartIcon from "../../../public/icons/CartIcon";
import EllipsisCircleIcon from "../../../public/icons/EllipsisCircleIcon";
import { SoonSmallIcon } from "./icons";
import Image from "next/image";
import { CourseProps } from "@/types/CourseProps";

interface Props {
  courseData: CourseProps;
}

const CourseCard: React.FC<Props> = ({ courseData }) => {
  return (
    <div className={styles.card}>
      {courseData.status !== "available" && (
        <div className={styles.soon}>
          <SoonSmallIcon />
        </div>
      )}
      <div className={styles["avatar-container"]}>
        <div className={styles.avatar}>
          <Image
            className={styles.image}
            alt="course-image"
            src={courseData.imageURL && "/images/courses/default-course.svg"}
            width={180}
            height={100}
          />
        </div>
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_title}>
          <div className={styles.label}>{courseData.title}</div>
          <div className={styles.price}>${courseData.price}</div>
        </div>
        <div className={styles.card_content}>
          <div className={styles.instructor}>
            {`${courseData.trainers[0].first_name} ${courseData.trainers[1].last_name}`}
          </div>
          <div className={styles.duration}>{courseData.total_duration}</div>
        </div>
        <div className={styles.card_footer}>
          <ACAButton
            text="اقرأ المزيد"
            variant="teal"
            size="small"
            icon={<EllipsisCircleIcon width={25} height={25} />}
          />
          <ACAButton
            text={courseData.status === "available" ? "شراء" : "احجز الآن"}
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
