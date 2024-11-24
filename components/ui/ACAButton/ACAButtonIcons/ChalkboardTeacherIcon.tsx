import React from "react";
import { SVGProps } from "@/types/SVGProps";

const ChalkboardTeacher: React.FC<SVGProps> = ({
  width = 34,
  height = 34,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1876 26.125C16.0102 26.125 15.8329 26.151 15.6636 26.2059C14.7018 26.5184 13.6902 26.7188 12.6251 26.7188C11.5601 26.7188 10.5485 26.5184 9.58586 26.2059C9.41664 26.151 9.24 26.125 9.06262 26.125C4.4566 26.125 0.725628 29.8716 0.75012 34.4835C0.760511 36.4325 2.36289 38 4.31262 38H20.9376C22.8873 38 24.4897 36.4325 24.5001 34.4835C24.5246 29.8716 20.7936 26.125 16.1876 26.125ZM12.6251 23.75C16.5602 23.75 19.7501 20.5601 19.7501 16.625C19.7501 12.6899 16.5602 9.5 12.6251 9.5C8.69004 9.5 5.50012 12.6899 5.50012 16.625C5.50012 20.5601 8.69004 23.75 12.6251 23.75ZM44.6876 0H16.1876C14.223 0 12.6251 1.65137 12.6251 3.68051V7.125C14.3633 7.125 15.9724 7.6282 17.3751 8.44609V4.75H43.5001V26.125H38.7501V21.375H29.2501V26.125H23.5917C25.0093 27.3637 26.0498 28.9995 26.5374 30.875H44.6876C46.6522 30.875 48.2501 29.2236 48.2501 27.1945V3.68051C48.2501 1.65137 46.6522 0 44.6876 0Z"
        fill={color}
      />
    </svg>
  );
};

export default ChalkboardTeacher;
