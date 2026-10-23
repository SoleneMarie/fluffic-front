import { IconProps } from "./types";

const MenuIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className || ""}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2.5H0V0H18V2.5ZM18 11.25H0V8.75H18V11.25ZM18 20H0V17.5H18V20Z"
        fill="currentColor"
        transform="translate(3 2)"
      />
    </svg>
  );
};

export default MenuIcon;
