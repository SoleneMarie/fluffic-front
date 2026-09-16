type HeartIconProps = {
  className?: string;
};

const HeartIcon = ({ className }: HeartIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11.5 20.5C5.5 15.7 1 11.65 1 6.7C1 3.4 3.25 1 6.25 1C8.5 1 10.15 2.2 11.5 4C12.85 2.2 14.5 1 16.75 1C19.75 1 22 3.4 22 6.7C22 11.65 17.5 15.7 11.5 20.5Z"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
