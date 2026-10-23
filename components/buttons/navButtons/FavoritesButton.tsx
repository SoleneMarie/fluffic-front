import { usePathname, useRouter } from "next/navigation";

import HeartIcon from "../../icons/HeartIcon";

type FavoritesButtonProps = {
  favoritesCount: number;
};

const FavoritesButton = ({ favoritesCount }: FavoritesButtonProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname.startsWith("/favorites");

  const hasFavorites = favoritesCount > 0;
  const displayCount = favoritesCount > 99 ? "99+" : favoritesCount.toString();

  const handleClick = () => {
    router.push("/favorites");
  };

  return (
    <button
      type="button"
      aria-label="favorites-button"
      aria-current={isActive ? "page" : undefined}
      onClick={handleClick}
      className={`flex items-center ${
        isActive ? "text-primary" : "text-tertiary-dark"
      } ${hasFavorites ? "mr-2 md:mr-0 gap-3" : "gap-2"}`}
    >
      <div className="relative">
        <HeartIcon className="h-6 w-6" strokeWidth={2.25} />
        {hasFavorites && (
          <span
            className="
            absolute p-1 left-4.5 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-primary-contrast bg-primary
            text-[11px] font-medium text-primary-contrast
          "
          >
            {displayCount}
          </span>
        )}
      </div>

      <span
        className={`mt-1 hidden md:inline ${
          isActive
            ? "font-semibold text-primary"
            : "font-medium text-tertiary-dark"
        }`}
      >
        Favoris
      </span>
    </button>
  );
};

export default FavoritesButton;
