import Image from "next/image";
import FavoriteButton from "@/components/buttons/FavoriteButton";

type PhotoWithFavoriteProps = {
  src: string;
  alt: string;
  isFavorite: boolean;
  onFavoriteClick: () => void;
  className?: string;
};

const PhotoWithFavorite = ({
  src,
  alt,
  isFavorite,
  onFavoriteClick,
  className,
}: PhotoWithFavoriteProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[10px] h-full w-full ${className ?? ""}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />

      <FavoriteButton
        isFavorite={isFavorite}
        onClick={onFavoriteClick}
        className="absolute top-2 right-2"
      />
    </div>
  );
};

export default PhotoWithFavorite;
