import FavoriteButton from "@/app/ai-tools/FavoriteButton/FavoriteButton";
import { SearchBar } from "@/components/ui";
import React from "react";
import styles from "../InfiniteScrolling.module.css";

interface FiltersProps {
  isFetching: boolean;
  handleOnSearch: (text: string) => void;
  isFavoritePressed: boolean;
  handleOnPressFavorite: () => void;
}

const Filters = ({
  isFetching,
  handleOnSearch,
  handleOnPressFavorite,
  isFavoritePressed,
}: FiltersProps) => {
  return (
    <div className={styles["header-container"]}>
      <SearchBar
        isDisabled={isFetching}
        placeholder="....chatgpt"
        handleOnSearch={handleOnSearch}
      />
      <FavoriteButton
        isDisabled={isFetching}
        handleOnPressFavorite={handleOnPressFavorite}
        isFavoritePressed={isFavoritePressed}
      />
    </div>
  );
};

export default Filters;
