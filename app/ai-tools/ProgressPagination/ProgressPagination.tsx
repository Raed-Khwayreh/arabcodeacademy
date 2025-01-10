"use client";

import React from "react";
import { FilledArrow } from "@/public/icons";
import styles from "./ProgressPagination.module.css";
import useScreenSize from "@/utils/useScreenSize";

interface ProgressPaginationProps {
  currentPage: number;
  pageNotFound: boolean;
  totalPages: number;
  listStartEnd: { start: number; end: number };
  handlePageChange: (newPage: number) => void;
}

/**
 * A pagination component with progress indicators, allowing navigation between pages.
 *
 * @param {number} currentPage - The current active page number.
 * @param {boolean} pageNotFound - Indicates if the current page does not exist this component will disapper.
 * @param {number} totalPages - The total number of pages.
 * @param {object} listStartEnd - Defines the range of page numbers to display.
 * @param {number} listStartEnd.start - The starting index of the page list to display.
 * @param {number} listStartEnd.end - The ending index of the page list to display.
 * @param {function} handlePageChange - Callback function to handle changes in the current page.
 * @param {number} handlePageChange.newPage - The new page number to navigate to.
 *
 * @returns {JSX.Element} A responsive pagination component with navigation buttons and page indicators.
 */

const ProgressPagination = ({
  currentPage,
  pageNotFound,
  totalPages,
  listStartEnd,
  handlePageChange,
}: ProgressPaginationProps) => {
  const screenSize = useScreenSize();

  return (
    <div className={styles.container}>
      <button
        aria-label="arrow-left-button"
        className={styles["arrow-left"]}
        onClick={() => {
          handlePageChange(currentPage - 1);
        }}
        disabled={currentPage === 1 || pageNotFound}
      >
        <FilledArrow
          width={screenSize <= 576 ? 19 : 46}
          height={screenSize <= 576 ? 19 : 44}
          color={currentPage === 1 || pageNotFound ? "#793ba28a" : "#783BA2"}
        />
      </button>
      <div className={styles.numbers}>
        {Array.from({ length: totalPages })
          .map((_, i) => i)
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
      <button
        aria-label="arrow-right-button"
        className={styles["arrow-right"]}
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages || pageNotFound}
      >
        <FilledArrow
          width={screenSize <= 576 ? 19 : 46}
          height={screenSize <= 576 ? 19 : 44}
          color={
            currentPage === totalPages || pageNotFound ? "#793ba28a" : "#783BA2"
          }
        />
      </button>
    </div>
  );
};

export default ProgressPagination;
