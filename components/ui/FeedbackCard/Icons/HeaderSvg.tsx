import React from "react";
import styles from "../FeedbackCard.module.css";

const HeaderSvg = () => {
  return (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 386 114"
      fill="none"
    >
      <path
        d="M0 5C0 2.23858 2.23858 0 5 0H385.452C385.452 0 222.485 8.44444 123.288 52.3556C24.0907 96.2667 0 113.156 0 113.156V5Z"
        fill="var(--secondary-color)"
      />
    </svg>
  );
};

export default HeaderSvg;
