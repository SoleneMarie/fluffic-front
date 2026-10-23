import type { StateCreator } from "zustand";

import type { TFavoritesSlice } from "@/types/store";
import type { TFlufficStore } from "@/types/store";

export const favoritesSlice: StateCreator<
  TFlufficStore,
  [],
  [],
  TFavoritesSlice
> = (set) => ({
  favorites: [],

  addFavorite: (id: string) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),

  removeFavorite: (id: string) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),
});
