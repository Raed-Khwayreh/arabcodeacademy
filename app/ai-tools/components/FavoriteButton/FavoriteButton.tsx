import { FavIcon } from "@/public/icons";
import styles from "./FavoriteButton.module.css";
import { useState } from "react";

interface FavoriteButtonProps {
  isFavoritePressed: boolean;
  handleOnPressFavorite: () => void;
  isDisabled: boolean;
}

const FavoriteButton = ({
  isDisabled,
  isFavoritePressed,
  handleOnPressFavorite,
}: FavoriteButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      disabled={isDisabled}
      className={`${styles["container"]} ${
        isDisabled ? styles["disabled-button"] : styles["active-button"]
      }`}
      onClick={handleOnPressFavorite}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FavIcon
        width={26}
        height={28}
        color={isDisabled ? "#9e9e9e" : "var(--primary-color)"}
        fillColor={
          isDisabled
            ? "white"
            : isFavoritePressed
            ? "var(--primary-color)"
            : isHovered
            ? "#DEDEDE"
            : "none"
        }
      />
      <p className={styles.text}>المفضلة</p>
    </button>
  );
};

export default FavoriteButton;
