import { SVGProps } from "@/types/SVGProps";
import React from "react";

const ArrowRight: React.FC<SVGProps> = ({
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
        d="M52.9319 40.6104L36.7477 57.7463C35.9672 58.5728 34.7017 58.5728 33.9212 57.7463L32.0336 55.7477C31.2544 54.9227 31.2529 53.5855 32.0303 52.7585L44.8565 39.114L32.0303 25.4696C31.2529 24.6426 31.2544 23.3055 32.0336 22.4804L33.9212 20.4818C34.7018 19.6553 35.9672 19.6553 36.7477 20.4818L52.9318 37.6177C53.7123 38.4441 53.7123 39.784 52.9319 40.6104Z"
        fill={color}
      />
      <circle cx="40" cy="40" r="37" stroke={color} strokeWidth="6" />
    </svg>
  );
};

export default ArrowRight;
