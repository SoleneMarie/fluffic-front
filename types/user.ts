import { TLocation } from "./location";

type TAdoptionProfile = {
  experienceWith: string[];
  excludedAnimalSpecies: string[];
  currentPetsSpecies: string[];
  hasKids: boolean;
  lifestyleScore: number;
  activityLevelScore: number;
  livingSpaceScore: number;
  livingEnvironmentScore: number;
  availableTimeScore: number;
  availableBudgetScore: number;
  shareAdoptionProfile: boolean;
};

type TFavorites = {
  pets: string[];
  shelters: string[];
};

type TPet = {
  id: string;
  name?: string;
  species: string;
  gender?: string;
  birthDate?: string;
  photoUrl?: string;
};

export type TUser = {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  description?: string;
  location?: TLocation;
  birthDate?: string;
  currentPets: TPet[];
  adoptionProfile?: TAdoptionProfile;
  favorites: TFavorites;
};
