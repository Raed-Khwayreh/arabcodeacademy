import React from "react";
import { SVGProps } from "../../../../types/SVGProps";

const DocumentListIcon: React.FC<SVGProps> = ({
  width = "34",
  height = "34",
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
        d="M23.7222 1.5H4.27778C2.74365 1.5 1.5 2.74365 1.5 4.27778V23.7222C1.5 25.2564 2.74365 26.5 4.27778 26.5H23.7222C25.2564 26.5 26.5 25.2564 26.5 23.7222V4.27778C26.5 2.74365 25.2564 1.5 23.7222 1.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.05469 7.05566H20.9436"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.05469 14H20.9436"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.05469 20.9443H15.388"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocumentListIcon;
