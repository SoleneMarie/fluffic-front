import HeartIcon from "../icons/HeartIcon";
import { ButtonHTMLAttributes } from "react";

type FavoriteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

const FavoriteButton = ({
  selected = false,
  className,
  ...rest
}: FavoriteButtonProps) => {
  return (
    <button
      {...rest}
      role="button"
      aria-label={selected ? "Retirer des favoris" : "Ajouter aux favoris"}
      aria-pressed={selected}
      className={`h-10 w-10 z-10 rounded-full flex items-center justify-center ${selected ? "bg-primary-contrast" : "bg-primary-contrast/80"} ${className || ""} `}
    >
      <HeartIcon
        className={`w-7 mt-1 z-100 ${selected ? "text-compatibility" : " text-tertiary/80"}`}
        filled={selected}
        strokeWidth={1.5}
      />
    </button>
  );
};

export default FavoriteButton;
