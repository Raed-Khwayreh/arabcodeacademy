import React from "react";
import Image from "next/image";
import styles from "./FeedbackCard.module.css";
import FilledStar from "./Icons/FilledStar";
import OutlinedStar from "./Icons/OutlinedStar";
import headerBackground from "./Icons/headerBackground.png";
import { FeedBackProps } from "@/types/FeedBackProps";
import avatar from "./Images/avatar.png";

export interface Props {
  feedback: FeedBackProps;
}

const FeedbackCardComponent: React.FC<Props> = ({ feedback }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image
          src={headerBackground}
          alt="Header background"
          className={styles.headerBackground}
        />
        <div className={styles.profileImageContainer}>
          <Image
            src={feedback.imageURL && avatar}
            width={100}
            height={100}
            alt={`${feedback.reviewerName} 's profile`}
            className={styles.profileImage}
          />
        </div>
      </div>
      <div
        className={styles.name}
      >{`${feedback.reviewerName} ${feedback.reviewerLastName}`}</div>
      <p className={styles.comment}>{feedback.reviewText}</p>
      <div className={styles.dateContainer}>{feedback.date}</div>
      <div className={styles.ratingContainer}>
        {Array.from({ length: 5 }, (_, i) =>
          i < feedback.rating ? (
            <FilledStar key={i} />
          ) : (
            <OutlinedStar key={i} />
          )
        )}
      </div>
    </div>
  );
};

export default FeedbackCardComponent;
