"use client";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { SearchIcon } from "@/public/icons";
import useScreenSize from "@/utils/useScreenSize";
import { LargeScreenSize, SmallScreenSize } from "@/constants/ScreenSizes";

interface SearchBarProps {
  placeholder: string;
  isDisabled?: boolean;
  handleOnSearch?: (text: string) => void;
}

/**
 * A Search component.
 * @param {function} handleOnSearch - Callback function to handle search.
 * @param {number} handleOnSearch.text - The new string to search.
 *
 * @returns {JSX.Element} A responsive pagination component with navigation buttons and page indicators.
 */

const SearchBar = ({
  placeholder,
  handleOnSearch,
  isDisabled,
}: SearchBarProps) => {
  const screenSize = useScreenSize();
  const [text, setText] = useState("");
  const handleOnPressSearch = () => {
    if (handleOnSearch !== undefined) {
      handleOnSearch(text);
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleOnPressSearch();
      setText("");
    }
  };

  return (
    <div
      className={`${styles.searchBar} ${
        isDisabled ? styles["disabled-searchBar"] : styles["active-searchBar"]
      }`}
    >
      <div
        className={`${styles.icon} ${
          isDisabled ? styles["disabled-icon"] : styles["active-icon"]
        }`}
        onClick={handleOnPressSearch}
      >
        <SearchIcon
          color={isDisabled ? "#9e9e9e" : "var(--primary-color)"}
          width={
            screenSize < SmallScreenSize
              ? 17
              : screenSize < LargeScreenSize
              ? 28
              : 30
          }
          height={
            screenSize < SmallScreenSize
              ? 17
              : screenSize < LargeScreenSize
              ? 28
              : 28
          }
        />
      </div>
      <input
        id={placeholder}
        disabled={isDisabled}
        onKeyDown={handleKeyDown}
        value={text}
        onChange={handleOnChange}
        type="text"
        placeholder={placeholder}
        className={`${styles.input} ${
          isDisabled ? styles["disabled-input"] : styles["active-input"]
        }`}
      />
    </div>
  );
};

export default SearchBar;
