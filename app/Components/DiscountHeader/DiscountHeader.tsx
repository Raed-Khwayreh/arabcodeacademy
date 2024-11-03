import React from "react";
import styles from "./Discount.module.css";
import { isInRange } from "@/app/utils/utilities";
interface Props {
  text: string;
  startDate: string;
  endDate: string;
}

const DiscountHeader: React.FC<Props> = ({ text, startDate, endDate }) => {
  const currentDate = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  const isValid = isInRange(currentDate, start, end);

  return isValid && <div className={styles.header}>{text}</div>;
};

export default DiscountHeader;
