import { IconProps } from "./types";

const FemaleIcon = ({ className, strokeWidth }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 15.8438C16.7619 15.8438 19.4062 13.2974 19.4062 10.1562C19.4062 7.01513 16.7619 4.46875 13.5 4.46875C10.2381 4.46875 7.59375 7.01513 7.59375 10.1562C7.59375 13.2974 10.2381 15.8438 13.5 15.8438Z"
        stroke="#C5A6CD"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M13.5 15.8438V21.9375"
        stroke="#C5A6CD"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9.70312 19.0938H17.2969"
        stroke="#C5A6CD"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FemaleIcon;
