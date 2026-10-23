import type { TUser } from "@/types/user";

export const mockUser: TUser = {
  id: "user-1",
  username: "Solene",
  email: "solene@example.com",
  avatarUrl:
    "https://res.cloudinary.com/djldvckh9/image/upload/thumbnail_tardigrade_mini_df06995a78.jpg",
  description: "Amoureuse des animaux 🐾",
  location: {
    city: "Toulon",
    lat: 43.1242,
    lon: 5.928,
  },
  birthDate: "1995-06-15",
  currentPets: [
    {
      id: "pet-1",
      name: "Moka",
      species: "rabbit",
      gender: "female",
      birthDate: "2022-03-10",
      photoUrl: "",
    },
  ],
  adoptionProfile: {
    experienceWith: ["rabbit"],
    excludedAnimalSpecies: [],
    currentPetsSpecies: ["rabbit"],
    hasKids: false,
    lifestyleScore: 4,
    activityLevelScore: 3,
    livingSpaceScore: 3,
    livingEnvironmentScore: 4,
    availableTimeScore: 4,
    availableBudgetScore: 3,
    shareAdoptionProfile: true,
  },
  favorites: {
    pets: ["pet-2", "pet-3"],
    shelters: ["shelter-1"],
  },
};
