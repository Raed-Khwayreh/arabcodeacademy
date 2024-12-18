import { FilledArrow } from "@/public/icons";
import React from "react";
import styles from "./ProgressPagination.module.css";

interface ProgressPaginationProps {
  currentPage: number;
  pageNotFound: boolean;
  totalPages: number;
  listStartEnd: { start: number; end: number };
  handlePageChange: (newPage: number) => void;
}

const ProgressPagination = ({
  currentPage,
  pageNotFound,
  totalPages,
  listStartEnd,
  handlePageChange,
}: ProgressPaginationProps) => {
  return (
    <div className={styles.container}>
      <button
        className={styles["arrow-left"]}
        onClick={() => {
          handlePageChange(currentPage - 1);
        }}
      >
        <FilledArrow
          color={currentPage === 1 || pageNotFound ? "#793ba28a" : "#783BA2"}
        />
      </button>
      <div className={styles.numbers}>
        {[
          ...Array(totalPages)
            .fill(0)
            .map((_, i) => i),
        ]
          .slice(listStartEnd.start, listStartEnd.end)
          .map((number, index) => (
            <button
              className={`${styles["button-number"]} ${
                currentPage === number + 1
                  ? styles["is-active"]
                  : styles["not-active"]
              }`}
              key={index}
              onClick={() => {
                handlePageChange(number + 1);
              }}
              disabled={currentPage === number + 1}
            >
              {`${number + 1}`}
            </button>
          ))}
      </div>
      <div
        className={styles["arrow-right"]}
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
      >
        <FilledArrow
          color={
            currentPage === totalPages || pageNotFound ? "#793ba28a" : "#783BA2"
          }
        />
      </div>
    </div>
  );
};

export default ProgressPagination;
