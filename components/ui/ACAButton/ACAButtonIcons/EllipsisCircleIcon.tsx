import React from "react";
import { SVGProps } from "../../../../types/SVGProps";

const EllipsisCircleIcon: React.FC<SVGProps> = ({
  width = "28",
  height = "28",
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.75 14.625C8.09518 14.625 8.375 14.3451 8.375 14C8.375 13.6549 8.09518 13.375 7.75 13.375C7.40483 13.375 7.125 13.6549 7.125 14C7.125 14.3451 7.40483 14.625 7.75 14.625Z"
        fill={color}
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.625C14.3451 14.625 14.625 14.3451 14.625 14C14.625 13.6549 14.3451 13.375 14 13.375C13.6549 13.375 13.375 13.6549 13.375 14C13.375 14.3451 13.6549 14.625 14 14.625Z"
        fill={color}
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 14.625C20.5951 14.625 20.875 14.3451 20.875 14C20.875 13.6549 20.5951 13.375 20.25 13.375C19.9049 13.375 19.625 13.6549 19.625 14C19.625 14.3451 19.9049 14.625 20.25 14.625Z"
        fill={color}
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 26.5C20.9035 26.5 26.5 20.9035 26.5 14C26.5 7.09644 20.9035 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9035 7.09644 26.5 14 26.5Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EllipsisCircleIcon;
