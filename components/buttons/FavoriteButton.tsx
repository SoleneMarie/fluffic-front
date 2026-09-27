import HeartIcon from "../icons/HeartIcon";
import { ButtonHTMLAttributes } from "react";

type FavoriteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isFavorite?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const FavoriteButton = ({
  isFavorite = false,
  className,
  ...rest
}: FavoriteButtonProps) => {
  return (
    <button
      {...rest}
      role="button"
      aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
      aria-pressed={isFavorite}
      className={`h-10 sm:h-12 w-10 sm:w-12 z-10 rounded-full flex items-center justify-center ${isFavorite ? "bg-primary-contrast/80" : "bg-primary-contrast/60"} ${className || ""} `}
    >
      <HeartIcon
        className={`w-7 sm:w-8 mt-1 z-100 ${isFavorite ? "text-compatibility" : " text-tertiary/80"}`}
        filled={isFavorite}
        strokeWidth={1.5}
      />
    </button>
  );
};

export default FavoriteButton;
