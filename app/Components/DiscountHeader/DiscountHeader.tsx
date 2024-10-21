import React from "react";
import styles from "./Discount.module.css";

interface Props {
  text: string;
  startDate: string;
  endDate: string;
}

const isInRange = (currentDate: Date, startDate: Date, endDate: Date) => {
  const isAfterStart = currentDate >= startDate;
  const isBeforeEnd = currentDate <= endDate;
  return isAfterStart && isBeforeEnd;
};

const DiscountHeader: React.FC<Props> = (props) => {
  const currentDate = new Date();
  const startDate = new Date(props.startDate);
  const endDate = new Date(props.endDate);
  const isValid = isInRange(currentDate, startDate, endDate);

  if (!isValid) {
    return null;
  }

  return <div className={styles.header}>{props.text}</div>;
};

export default DiscountHeader;
