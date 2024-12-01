import { SVGProps } from "@/types/SVGProps";
import React from "react";

const ArrowLeft: React.FC<SVGProps> = ({
  width = 80,
  height = 80,
  color = "#713488",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M27.0681 40.6104L43.2523 57.7463C44.0328 58.5728 45.2983 58.5728 46.0788 57.7463L47.9664 55.7477C48.7456 54.9227 48.7471 53.5855 47.9697 52.7585L35.1435 39.114L47.9697 25.4696C48.7471 24.6426 48.7456 23.3055 47.9664 22.4804L46.0788 20.4818C45.2982 19.6553 44.0328 19.6553 43.2523 20.4818L27.0682 37.6177C26.2877 38.4441 26.2877 39.784 27.0681 40.6104Z"
        fill={color}
      />
      <circle
        cx="40"
        cy="40"
        r="37"
        transform="matrix(-1 0 0 1 80 0)"
        stroke={color}
        strokeWidth="6"
      />
    </svg>
  );
};

export default ArrowLeft;
