import { FavIcon } from "@/public/icons";
import styles from "./FavoriteButton.module.css";
import { useState } from "react";

interface FavoriteButtonProps {
  isFavoritePressed: boolean;
  handleOnPressFavorite: () => void;
}

const FavoriteButton = ({
  isFavoritePressed,
  handleOnPressFavorite,
}: FavoriteButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles["container"]}
      onClick={handleOnPressFavorite}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FavIcon
        width={26}
        height={28}
        color={"#783ba2"}
        fillColor={
          isFavoritePressed ? "#783ba2" : isHovered ? "#DEDEDE" : "none"
        }
      />
      <p
        style={{
          color: "var(--primary-color)",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        المفضلة
      </p>
    </div>
  );
};

export default FavoriteButton;
