"use client";
import { FavIcon } from "@/public/icons";
import React from "react";

interface Props {
  isFav: boolean;
}

const Favorite: React.FC<Props> = ({ isFav }) => {
  const [favorite, setFavorite] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      <button
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
    </div>
  );
};
export default Favorite;
