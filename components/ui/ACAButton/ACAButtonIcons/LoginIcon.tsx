import { SVGProps } from "../../../../types/SVGProps";

const LogOutIcon: React.FC<SVGProps> = ({
  width = "34",
  height = "34",
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.8571 16.9576H15M15 16.9576L20.5102 21.9576M15 16.9576L20.5102 11.9576"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.8569 6.95752V5.29085C27.8569 3.4499 26.2123 1.95752 24.1834 1.95752H5.81605C3.78725 1.95752 2.14258 3.4499 2.14258 5.29085V28.6242C2.14258 30.4652 3.78725 31.9575 5.81605 31.9575H24.1834C26.2123 31.9575 27.8569 30.4652 27.8569 28.6242V26.9575"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogOutIcon;
