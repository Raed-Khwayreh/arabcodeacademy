"use client";
import React from "react";
import styles from "./SearchBar.module.css";
import { SearchIcon } from "@/public/icons";
import useScreenSize from "@/utils/useScreenSize";
import { LargeScreenSize, SmallScreenSize } from "@/constants/ScreenSizes";

const SearchBar = () => {
  const screenSize = useScreenSize();
  return (
    <div className={styles.searchBar}>
      <div className={styles.icon}>
        <SearchIcon
          width={
            screenSize > LargeScreenSize
              ? 25
              : screenSize < SmallScreenSize
              ? 17.66
              : 30
          }
          height={
            screenSize > LargeScreenSize
              ? 25
              : screenSize < SmallScreenSize
              ? 18.75
              : 28.13
          }
        />
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
