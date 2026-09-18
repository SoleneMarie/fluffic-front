type TimeIconProps = {
  strokeWidth?: number;
  className?: string;
};

const TimeIcon = ({ strokeWidth = 2, className }: TimeIconProps) => {
  return (
    <svg
      className={className || ""}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 16.6667C14.366 16.6667 17.5 13.6819 17.5 10C17.5 6.31814 14.366 3.33337 10.5 3.33337C6.63401 3.33337 3.5 6.31814 3.5 10C3.5 13.6819 6.63401 16.6667 10.5 16.6667Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M10.5 10V7.08337"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10.5 10L13.125 11.6667"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TimeIcon;
