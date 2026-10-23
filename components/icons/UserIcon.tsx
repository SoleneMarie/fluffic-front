import { IconProps } from "./types";

const UserIcon = ({ strokeWidth = 2, className }: IconProps) => {
  return (
    <svg
      className={className || ""}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(0.45 0.25) scale(0.9)">
        <path
          d="M21.25 11.3334C21.25 13.6806 19.3472 15.5834 17 15.5834C14.6528 15.5834 12.75 13.6806 12.75 11.3334C12.75 8.98616 14.6528 7.08337 17 7.08337C19.3472 7.08337 21.25 8.98616 21.25 11.3334Z"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
        <path
          d="M8.5 26.9167C9.35 22.3834 12.4667 19.8334 17 19.8334C21.5333 19.8334 24.65 22.3834 25.5 26.9167"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default UserIcon;
