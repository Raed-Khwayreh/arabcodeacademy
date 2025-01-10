"use client";
import { FavIcon } from "@/public/icons";
import React from "react";
import styles from "./Favorite.module.css";

interface Props {
  isFav: boolean;
  id: number;
  handleOnPressFavoriteCard: (n: number) => void;
}

const Favorite: React.FC<Props> = ({
  isFav,
  handleOnPressFavoriteCard,
  id,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    handleOnPressFavoriteCard(id);
  };

  return (
    <button
      aria-label="fav-button"
      className={styles.favorite}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FavIcon
        width={26}
        height={28}
        color={"#783ba2"}
        fillColor={isFav ? "#783ba2" : isHovered ? "#DEDEDE" : "none"}
      />
    </button>
  );
};
export default Favorite;
