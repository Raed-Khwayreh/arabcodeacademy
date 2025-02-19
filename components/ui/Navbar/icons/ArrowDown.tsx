import React from "react";
import { SVGProps } from "@/types/SVGProps";

const ArrowDown: React.FC<SVGProps> = ({ color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
    >
      <path
        d="M6 9.4458L0.803848 0.445801L11.1962 0.445801L6 9.4458Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;
