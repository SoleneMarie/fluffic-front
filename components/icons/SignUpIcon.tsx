import { IconProps } from "./types";

const SignUpIcon = ({ strokeWidth = 2, className }: IconProps) => {
  return (
    <svg
      className={className || ""}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 20V18.5C15 16.567 13.433 15 11.5 15H7.5C5.567 15 4 16.567 4 18.5V20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle
        cx="9.5"
        cy="8"
        r="3.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M18 8V14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M15 11H21"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SignUpIcon;
