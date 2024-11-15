import React from "react";
import { SVGProps } from "@/types/SVGProps";

const AiIcon: React.FC<SVGProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="65"
      viewBox="0 0 65 65"
      version="1.1"
    >
      <path
        d="M 2.414 3.363 C 1.221 6.472, 2.428 9.490, 5 9.831 C 9.667 10.450, 18.832 21.036, 17.111 23.820 C 16.586 24.670, 15.679 24.287, 14.010 22.511 C 12.713 21.130, 11.049 20, 10.312 20 C 9.576 20, 8.139 19.479, 7.119 18.842 C 4.534 17.228, 2 18.475, 2 21.362 C 2 24.342, 4.206 25.319, 7.522 23.808 C 9.665 22.832, 10.374 23.002, 12.510 25.009 C 15.300 27.630, 15.770 30, 13.500 30 C 12.567 30, 12 30.944, 12 32.500 C 12 34.056, 12.567 35, 13.500 35 C 15.785 35, 15.294 37.376, 12.458 40.040 C 10.268 42.097, 9.635 42.253, 7.895 41.167 C 5.008 39.363, 2 40.604, 2 43.599 C 2 46.521, 4.520 47.781, 7.119 46.158 C 8.139 45.521, 9.576 45, 10.312 45 C 11.049 45, 12.713 43.870, 14.010 42.489 C 15.679 40.713, 16.586 40.330, 17.111 41.180 C 18.832 43.964, 9.667 54.550, 5 55.169 C 2.873 55.451, 2.500 56.022, 2.500 59 C 2.500 62.333, 2.667 62.500, 6 62.500 C 8.978 62.500, 9.549 62.127, 9.831 60 C 10.450 55.333, 21.036 46.168, 23.820 47.889 C 24.670 48.414, 24.287 49.321, 22.511 50.990 C 21.130 52.287, 20 53.951, 20 54.688 C 20 55.424, 19.479 56.861, 18.842 57.881 C 17.228 60.466, 18.475 63, 21.362 63 C 24.342 63, 25.319 60.794, 23.808 57.478 C 22.832 55.335, 23.002 54.626, 25.009 52.490 C 27.630 49.700, 30 49.230, 30 51.500 C 30 52.433, 30.944 53, 32.500 53 C 34.056 53, 35 52.433, 35 51.500 C 35 49.215, 37.376 49.706, 40.040 52.542 C 42.097 54.732, 42.253 55.365, 41.167 57.105 C 39.363 59.992, 40.604 63, 43.599 63 C 46.521 63, 47.781 60.480, 46.158 57.881 C 45.521 56.861, 45 55.424, 45 54.688 C 45 53.951, 43.870 52.287, 42.489 50.990 C 40.713 49.321, 40.330 48.414, 41.180 47.889 C 43.964 46.168, 54.550 55.333, 55.169 60 C 55.451 62.127, 56.022 62.500, 59 62.500 C 62.219 62.500, 62.525 62.239, 62.814 59.243 C 63.126 56.006, 62.359 55.169, 58.572 54.613 C 56.539 54.315, 50.230 48.263, 48.488 44.941 C 46.453 41.059, 48.116 39.430, 50.990 42.489 C 52.287 43.870, 53.951 45, 54.688 45 C 55.424 45, 56.861 45.521, 57.881 46.158 C 60.466 47.772, 63 46.525, 63 43.638 C 63 40.658, 60.794 39.681, 57.478 41.192 C 55.335 42.168, 54.626 41.998, 52.490 39.991 C 49.700 37.370, 49.230 35, 51.500 35 C 52.433 35, 53 34.056, 53 32.500 C 53 30.944, 52.433 30, 51.500 30 C 49.215 30, 49.706 27.624, 52.542 24.960 C 54.732 22.903, 55.365 22.747, 57.105 23.833 C 59.992 25.637, 63 24.396, 63 21.401 C 63 18.479, 60.480 17.219, 57.881 18.842 C 56.861 19.479, 55.424 20, 54.688 20 C 53.951 20, 52.287 21.130, 50.990 22.511 C 49.321 24.287, 48.414 24.670, 47.889 23.820 C 46.168 21.036, 55.333 10.450, 60 9.831 C 62.127 9.549, 62.500 8.978, 62.500 6 C 62.500 2.781, 62.239 2.475, 59.243 2.186 C 56.006 1.874, 55.169 2.641, 54.613 6.428 C 54.315 8.461, 48.263 14.770, 44.941 16.512 C 41.059 18.547, 39.430 16.884, 42.489 14.010 C 43.870 12.713, 45 11.049, 45 10.312 C 45 9.576, 45.521 8.139, 46.158 7.119 C 47.772 4.534, 46.525 2, 43.638 2 C 40.658 2, 39.681 4.206, 41.192 7.522 C 42.168 9.665, 41.998 10.374, 39.991 12.510 C 37.370 15.300, 35 15.770, 35 13.500 C 35 12.567, 34.056 12, 32.500 12 C 30.944 12, 30 12.567, 30 13.500 C 30 15.785, 27.624 15.294, 24.960 12.458 C 22.903 10.268, 22.747 9.635, 23.833 7.895 C 25.637 5.008, 24.396 2, 21.401 2 C 18.479 2, 17.219 4.520, 18.842 7.119 C 19.479 8.139, 20 9.576, 20 10.312 C 20 11.049, 21.130 12.713, 22.511 14.010 C 24.287 15.679, 24.670 16.586, 23.820 17.111 C 21.036 18.832, 10.450 9.667, 9.831 5 C 9.565 2.994, 8.856 2.438, 6.243 2.186 C 4.059 1.976, 2.798 2.363, 2.414 3.363 M 24.400 24.400 C 21.498 27.302, 21 28.488, 21 32.500 C 21 39.283, 25.717 44, 32.500 44 C 36.512 44, 37.698 43.502, 40.600 40.600 C 43.502 37.698, 44 36.512, 44 32.500 C 44 28.488, 43.502 27.302, 40.600 24.400 C 37.698 21.498, 36.512 21, 32.500 21 C 28.488 21, 27.302 21.498, 24.400 24.400 M 25.400 25.400 C 20.670 30.130, 20.670 34.870, 25.400 39.600 C 30.130 44.330, 34.870 44.330, 39.600 39.600 C 44.330 34.870, 44.330 30.130, 39.600 25.400 C 36.959 22.759, 35.375 22, 32.500 22 C 29.625 22, 28.041 22.759, 25.400 25.400 M 27.975 30.565 C 27.439 31.976, 27.052 34.113, 27.116 35.315 C 27.206 37.007, 27.335 37.105, 27.689 35.750 C 28.297 33.424, 32.703 33.424, 33.311 35.750 C 33.665 37.105, 33.794 37.007, 33.884 35.315 C 34.062 31.964, 32.228 28, 30.500 28 C 29.648 28, 28.512 29.154, 27.975 30.565 M 36.286 32.500 C 36.294 35.250, 36.488 36.256, 36.718 34.736 C 36.947 33.216, 36.941 30.966, 36.704 29.736 C 36.467 28.506, 36.279 29.750, 36.286 32.500 M 29.639 29.694 C 28.444 30.889, 28.994 33, 30.500 33 C 31.325 33, 32 32.352, 32 31.559 C 32 29.888, 30.573 28.761, 29.639 29.694"
        stroke="none"
        fill="#fffcfc"
        fillRule="evenodd"
      />
      <path d="" stroke="none" fill="#fcfcfc" fillRule="evenodd" />
    </svg>
  );
};

export default AiIcon;
