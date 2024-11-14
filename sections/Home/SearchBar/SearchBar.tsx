import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.icon}>
        <svg
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgIcon}
        >
          <circle cx="11" cy="11" r="8" stroke="#713488" strokeWidth="3" />
          <line
            x1="16.5"
            y1="16.5"
            x2="22"
            y2="22"
            stroke="#713488"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <input
        type="text"
        placeholder="مقدمة لمحرك الألعاب اليونتي ....."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
