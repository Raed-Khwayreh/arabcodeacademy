import React from "react";
import ACALoading from "@/components/ui/ACALoading";
import ACAError from "@/components/ui/ACAError";
import { ErrorMessage } from "@/types/ErrorMessage";
import styles from "./Feedback.module.css";
import dynamic from "next/dynamic";

const fetchReviews = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch {
    throw new Error(ErrorMessage.CONNECTION_FAILD);
  }
};

const FeedbackListLazyComponent = dynamic(
  () => import("./FeedbackList/FeedbackList"),
  {
    loading: () => <ACALoading />,
    ssr: false,
  }
);

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
    <section className={styles.container}>
      <div className={styles["reviews-list-container"]}>
        <FeedbackListLazyComponent reviews={reviews} />
      </div>
    </section>
  );
};

export default Feedback;
