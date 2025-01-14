import React from "react";
import { SVGProps } from "@/types/SVGProps";

const ProfileCircleIcon: React.FC<SVGProps> = ({
  width = 26,
  height = 26,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9434 2.02881C8.65908 2.02881 1.94336 8.74453 1.94336 17.0288C1.94336 25.313 8.65908 32.0288 16.9434 32.0288C25.2276 32.0288 31.9434 25.313 31.9434 17.0288C31.9434 8.74453 25.2276 2.02881 16.9434 2.02881Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.34961 26.5474C5.34961 26.5474 8.69314 22.2788 16.9431 22.2788C25.1931 22.2788 28.5368 26.5474 28.5368 26.5474"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9434 17.0288C19.4287 17.0288 21.4434 15.0142 21.4434 12.5288C21.4434 10.0435 19.4287 8.02881 16.9434 8.02881C14.458 8.02881 12.4434 10.0435 12.4434 12.5288C12.4434 15.0142 14.458 17.0288 16.9434 17.0288Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileCircleIcon;
