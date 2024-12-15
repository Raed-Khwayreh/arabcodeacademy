"use client";
import React from "react";

interface Props {
  width: number;
  height: number;
}

const Favorite: React.FC<Props> = ({ width = "17", height = "17" }) => {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={favorite ? "#783ba2" : isHovered ? "#DEDEDE" : "none"}
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            color: "#783ba2",
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
    </div>
  );
};
export default Favorite;
