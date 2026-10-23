"use client";

import { useState } from "react";

import PhotoCarousel from "@/components/media/PhotoCarousel";
import PhotoWithFavorite from "@/components/media/PhotoWithFavorite";
import SectionTitle from "@/components/titles/SectionTitle";

const mockAnimal = {
  id: "animal-1",
  name: "Chon",
  photos: ["/images/chon.png", "/images/refuge-nac.png"],
};

const mockAnimal2 = {
  id: "animal-2",
  name: "Poupette",
  photos: ["/images/poupette.png"],
};

const mockShelter = {
  id: "shelter-1",
  name: "Refuge NAC",
  photos: [
    "/images/refuge-nac.png",
    "/images/chon.png",
    "/images/poupette.png",
  ],
};

const MediaExamples = () => {
  const [inFavorites, setInFavorites] = useState<string[]>([]);

  const handleFavorites = (id: string) => {
    setInFavorites((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((favoriteId) => favoriteId !== id)
        : [...currentFavorites, id],
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle>Photos</SectionTitle>

      <div className="flex items-end gap-10">
        <div className="w-60 max-w-full aspect-3/2">
          <PhotoWithFavorite
            src={mockAnimal.photos[0]}
            alt={mockAnimal.name}
            isFavorite={inFavorites.includes(mockAnimal.id)}
            onFavoriteClick={() => handleFavorites(mockAnimal.id)}
          />
        </div>
        <div className="w-100 max-w-full aspect-5/3">
          <PhotoWithFavorite
            src={mockAnimal2.photos[0]}
            alt={mockAnimal2.name}
            isFavorite={inFavorites.includes(mockAnimal2.id)}
            onFavoriteClick={() => handleFavorites(mockAnimal2.id)}
          />
        </div>
      </div>

      <SectionTitle>Carousel</SectionTitle>
      <div className="w-100 max-w-full aspect-5/3">
        <PhotoCarousel
          photos={mockShelter.photos}
          alt={mockShelter.name}
          isFavorite={inFavorites.includes(mockShelter.id)}
          onFavoriteClick={() => handleFavorites(mockShelter.id)}
        />
      </div>
    </div>
  );
};

export default MediaExamples;
