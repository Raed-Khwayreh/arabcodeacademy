import { SVGProps } from "@/types/SVGProps";
import React from "react";

const FilledArrow = ({
  color = "#783BA2",
  height = 37,
  width = 32,
}: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 32 37"
      fill="none"
    >
      <path
        d="M2.35342 21.2276C0.393124 20.0656 0.393128 17.2284 2.35342 16.0663L27.1577 1.36265C29.1575 0.177197 31.6875 1.61855 31.6875 3.94331V33.3507C31.6875 35.6754 29.1575 37.1168 27.1577 35.9313L2.35342 21.2276Z"
        fill={color}
      />
    </svg>
  );
};

export default FilledArrow;
