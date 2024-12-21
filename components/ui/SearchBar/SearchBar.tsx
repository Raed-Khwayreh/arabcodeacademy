"use client";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { SearchIcon } from "@/public/icons";
import useScreenSize from "@/utils/useScreenSize";
import { LargeScreenSize, SmallScreenSize } from "@/constants/ScreenSizes";

interface SearchBarProps {
  placeholder: string;
  handleOnSearch?: (text: string) => void;
}

const SearchBar = ({ placeholder, handleOnSearch }: SearchBarProps) => {
  const screenSize = useScreenSize();
  const [text, setText] = useState("");
  const handleOnPressSearch = () => {
    if (handleOnSearch !== undefined) {
      handleOnSearch(text);
      setText("");
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
    <div className={styles.searchBar}>
      <div className={styles.icon} onClick={handleOnPressSearch}>
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
        id={placeholder}
        onKeyDown={handleKeyDown}
        value={text}
        onChange={handleOnChange}
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
