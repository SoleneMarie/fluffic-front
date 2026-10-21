"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SectionTitle from "@/components/titles/SectionTitle";

import LoginCTACard from "@/components/cards/CTACards/LoginCTACard";
import MatchCTACard from "@/components/cards/CTACards/MatchCTACard";

import { Animal } from "@/types/animal";
import AnimalCard from "@/components/cards/AnimalCards/AnimalCard";
import AnimalCardSkeleton from "@/components/cards/AnimalCards/AnimalCardSkeleton";

const mockAnimal: Animal = {
  id: "animal-1",
  name: "Chon",
  photos: ["/images/chon.png", "/images/refuge-nac.png"],
  city: "La Valette-du-Var",
  tags: ["joueur", "câlin", "espiègle"],
  age: "2 ans et demi",
  compatibilityScore: 72,
  gender: "M",
  specie: "cochon d'Inde",
};

const mockAnimal2: Animal = {
  id: "animal-2",
  name: "Poupette",
  photos: ["/images/poupette.png"],
  city: "Toulon",
  tags: ["calme", "gourmande", "curieuse"],
  age: "4 ans",
  gender: "F",
  specie: "lapin",
};

const CardExamples = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFavorite = (animalId: string) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(animalId)
        ? currentFavorites.filter((id) => id !== animalId)
        : [...currentFavorites, animalId],
    );
  };

  const handleClick = (animalId: string) => {
    console.log(`Animal card clicked: ${animalId}`);
  };

  return (
    <div className="flex flex-col justify-content gap-4">
      <SectionTitle className="mb-2">
        Cartes d&apos;appel à l&apos;action
      </SectionTitle>
      <div className="flex flex-col md:flex-row gap-6 items-center pb-4">
        <MatchCTACard onClick={() => router.push("/matches")} />
        <LoginCTACard
          onLogin={() => router.push("/login")}
          onCreateAccount={() => router.push("/register")}
        />
      </div>
      <SectionTitle className="mb-2">Petites cartes animal</SectionTitle>
      <div className="grid grid-cols-2 min-[550px]:grid-cols-3 md:grid-cols-4 gap-4 items-stretch pb-4">
        <AnimalCard
          size="small"
          animal={mockAnimal}
          isFavorite={favorites.includes(mockAnimal.id)}
          onFavoriteClick={() => handleFavorite(mockAnimal.id)}
          onClick={() => handleClick(mockAnimal.id)}
        />
        <AnimalCard
          size="small"
          animal={mockAnimal2}
          isFavorite={favorites.includes(mockAnimal2.id)}
          onFavoriteClick={() => handleFavorite(mockAnimal2.id)}
          onClick={() => handleClick(mockAnimal2.id)}
        />
        <AnimalCardSkeleton size="small" />
      </div>

      <SectionTitle className="mb-2">Grandes cartes animal</SectionTitle>
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch pb-4 ">
        <AnimalCard
          size="medium"
          animal={mockAnimal}
          isFavorite={favorites.includes(mockAnimal.id)}
          onFavoriteClick={() => handleFavorite(mockAnimal.id)}
          onClick={() => handleClick(mockAnimal.id)}
        />
        <AnimalCard
          size="medium"
          animal={mockAnimal2}
          isFavorite={favorites.includes(mockAnimal2.id)}
          onFavoriteClick={() => handleFavorite(mockAnimal2.id)}
          onClick={() => handleClick(mockAnimal2.id)}
        />
        <AnimalCardSkeleton size="medium" />
      </div>
    </div>
  );
};

export default CardExamples;
