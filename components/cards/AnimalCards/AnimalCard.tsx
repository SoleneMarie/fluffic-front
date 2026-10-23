import CompatibilityIndicator from "@/components/indicators/CompatibilityIndicator";
import PhotoCarousel from "@/components/media/PhotoCarousel";
import ChipTag from "@/components/tags/ChipTag";
import { Animal } from "@/types/animal";

import AnimalMainInfos from "./AnimalMainInfos";

type AnimalCardProps = {
  size: "small" | "medium";
  animal: Animal;
  isFavorite: boolean;
  onFavoriteClick: () => void;
  onClick: () => void;
};

const AnimalCard = ({
  size = "small",
  animal,
  isFavorite,
  onFavoriteClick,
  onClick,
}: AnimalCardProps) => {
  const { name, photos, city, tags, age, compatibilityScore, gender, specie } =
    animal;

  return (
    <div className="@container w-full h-full">
      <div
        onClick={onClick}
        className="border-2 @min-[200px]:border-2.5 @min-[300px]:border-3 border-separator w-full h-full flex flex-col p-2 @min-[200px]:p-2.5 @min-[300px]:p-4 rounded-[10px] cursor-pointer hover:border-primary-light/60
  transition-colors duration-400"
      >
        <div
          className={`${size === "small" ? "aspect-3/2" : "aspect-5/3 mb-1"}`}
        >
          <PhotoCarousel
            photos={size === "small" ? photos.slice(0, 1) : photos}
            alt={name}
            isFavorite={isFavorite}
            onFavoriteClick={onFavoriteClick}
          />
        </div>

        <AnimalMainInfos
          size={size}
          name={name}
          specie={specie}
          age={age}
          gender={gender}
          city={city}
        />
        {size === "medium" && (
          <>
            <div className="flex flex-wrap gap-1.5 items-center mt-2">
              {tags?.map((tag) => (
                <ChipTag key={tag} size={size}>
                  {tag}
                </ChipTag>
              ))}
            </div>
            <CompatibilityIndicator
              size="small"
              value={compatibilityScore}
              className="mt-auto pt-2.5 mb-1"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AnimalCard;
