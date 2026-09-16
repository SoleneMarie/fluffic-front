type ContactIconProps = {
  strokeWidth?: number;
  className?: string;
};

const ContactIcon = ({ className, strokeWidth = 2 }: ContactIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17 6H7C5.34315 6 4 7.34315 4 9V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M5 8L12 13L19 8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ContactIcon;
