import { IconProps } from "./types";

const MaleIcon = ({ className, strokeWidth }: IconProps) => {
  return (
    <svg
      className={className || ""}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3906 22.3125C14.6526 22.3125 17.2969 19.5702 17.2969 16.1875C17.2969 12.8048 14.6526 10.0625 11.3906 10.0625C8.12869 10.0625 5.48438 12.8048 5.48438 16.1875C5.48438 19.5702 8.12869 22.3125 11.3906 22.3125Z"
        stroke="#92C1B2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M16.0312 11.375L21.0938 6.125"
        stroke="#92C1B2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M16.875 6.125H21.0938V10.5"
        stroke="#92C1B2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MaleIcon;
