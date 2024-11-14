import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./FeedbackCard.module.css";
import FilledStar from "./Icons/FilledStar";
import OutlinedStar from "./Icons/OutlinedStar";
import headerBackground from "./Icons/headerBackground.png";

interface Props {
  name: string;
  image: StaticImageData;
  rating: number;
  comment: string;
  date: string;
}

const FeedbackCardComponent: React.FC<Props> = ({
  name,
  image,
  rating,
  comment,
  date,
}) => {
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
            src={image}
            alt={`${name}'s profile`}
            className={styles.profileImage}
          />
        </div>
      </div>
      <div className={styles.name}>{name}</div>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.dateContainer}>{date}</div>
      <div className={styles.ratingContainer}>
        {Array.from({ length: 5 }, (_, i) =>
          i < rating ? <FilledStar key={i} /> : <OutlinedStar key={i} />
        )}
      </div>
    </div>
  );
};

export default FeedbackCardComponent;
