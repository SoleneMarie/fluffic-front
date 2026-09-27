import { IconProps } from "./types";

const PinIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 14C9 14 14.0625 9.875 14.0625 6.125C14.0625 3.65 11.8125 1.75 9 1.75C6.1875 1.75 3.9375 3.65 3.9375 6.125C3.9375 9.875 9 14 9 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7.75C10.0096 7.75 10.8281 7.02246 10.8281 6.125C10.8281 5.22754 10.0096 4.5 9 4.5C7.99035 4.5 7.17188 5.22754 7.17188 6.125C7.17188 7.02246 7.99035 7.75 9 7.75Z"
        stroke="currentColor"
      />
    </svg>
  );
};

export default PinIcon;
