type SparkleIconProps = {
  strokeWidth?: number;
  className?: string;
};

const SparkleIcon = ({ strokeWidth = 2, className }: SparkleIconProps) => {
  return (
    <svg
      className={className || ""}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 2.375L10.925 7.18438L15.7344 8.60938L10.925 10.0344L9.5 14.8438L8.075 10.0344L3.26562 8.60938L8.075 7.18438L9.5 2.375Z"
        stroke="#E6818C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M14.8438 13.0625L15.4672 15.1109L17.5156 15.7344L15.4672 16.3578L14.8438 18.4062L14.2203 16.3578L12.1719 15.7344L14.2203 15.1109L14.8438 13.0625Z"
        stroke="#E6818C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M4.15625 0.890625L4.66094 2.46406L6.23438 2.96875L4.66094 3.47344L4.15625 5.04687L3.65156 3.47344L2.07812 2.96875L3.65156 2.46406L4.15625 0.890625Z"
        stroke="#E6818C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default SparkleIcon;
