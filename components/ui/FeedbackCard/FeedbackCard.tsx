import React from "react";
import Image from "next/image";
import styles from "./FeedbackCard.module.css";
import FilledStar from "./Icons/FilledStar";
import OutlinedStar from "./Icons/OutlinedStar";
import headerBackground from "./Icons/headerBackground.webp";
import { FeedBackProps } from "@/types/FeedBackProps";
import avatar from "./Images/avatar.webp";

export interface Props {
  feedback: FeedBackProps;
}

/**
 * A component to display a feedback card
 *
 * @param {{feedback: FeedBackProps}} props The component props
 * @returns {JSX.Element} The rendered component
 *
 * This component renders a card with a header containing a profile image, a reviewer name and a rating, a comment and a date.
 * The rating is a group of filled and outlined stars, where the number of filled stars corresponds to the rating number.
 */

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
