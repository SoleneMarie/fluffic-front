export type TFavoritesSlice = {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export type TFlufficStore = TFavoritesSlice;
