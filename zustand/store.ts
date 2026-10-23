import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { TFlufficStore } from "@/types/store";

import { favoritesSlice } from "./slices/favoritesSlice";

export const useFlufficStore = create<TFlufficStore>()(
  persist(
    (set, get, api) => ({
      ...favoritesSlice(set, get, api),
    }),
    { name: "fluffic-store" },
  ),
);
