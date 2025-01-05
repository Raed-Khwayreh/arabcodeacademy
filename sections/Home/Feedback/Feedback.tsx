import React from "react";
import ACALoading from "@/components/ui/ACALoading";
import ACAError from "@/components/ui/ACAError";
import { ErrorMessage } from "@/types/ErrorMessage";
import styles from "./Feedback.module.css";
import FeedbackList from "./FeedbackList/FeedbackList";

const fetchReviews = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch {
    throw new Error(ErrorMessage.CONNECTION_FAILD);
  }
};

const Feedback = async () => {
  let reviews;
  try {
    const data = await fetchReviews();
    reviews = data.reviews;
  } catch {
    return <ACAError errorMessage={ErrorMessage.CONNECTION_FAILD} />;
  }

  if (!reviews) return <ACALoading />;

  return (
    <div className={styles.container}>
      <div className={styles["reviews-list-container"]}>
        <FeedbackList reviews={reviews} />
      </div>
    </div>
  );
};

export default Feedback;
