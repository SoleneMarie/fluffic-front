import { IconProps } from "./types";

const HouseIcon = ({ strokeWidth = 2, className }: IconProps) => {
  return (
    <svg
      className={className || ""}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 11L12 5L19 11V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V11Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19V14H14.5V19"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HouseIcon;
