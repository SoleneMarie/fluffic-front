"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import DotButton from "@/components/buttons/DotButton";

import PhotoWithFavorite from "./PhotoWithFavorite";

type PhotoCarouselProps = {
  photos: string[];
  alt: string;
  isFavorite: boolean;
  onFavoriteClick: () => void;
};

const PhotoCarousel = ({
  photos,
  alt,
  isFavorite,
  onFavoriteClick,
}: PhotoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

  if (!photos.length) {
    return null;
  }

  const handleDotClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    event.stopPropagation();
    emblaApi?.scrollTo(index);
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={emblaRef}
        className="overflow-hidden w-full h-full cursor-grab active:cursor-grabbing"
      >
        <div className="flex h-full  ">
          {photos.map((photo, index) => (
            <div key={photo} className="flex-[0_0_100%] min-w-0 h-full">
              <PhotoWithFavorite
                src={photo}
                alt={`${alt} - photo ${index + 1}`}
                isFavorite={isFavorite}
                onFavoriteClick={onFavoriteClick}
              />
            </div>
          ))}
        </div>
      </div>

      {photos.length > 1 && (
        <div
          data-testid="carousel-pagination"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.75"
        >
          {photos.map((_, index) => (
            <DotButton
              key={index}
              isActive={index === currentIndex}
              onClick={(event) => handleDotClick(event, index)}
              ariaLabel={`Afficher la photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoCarousel;
