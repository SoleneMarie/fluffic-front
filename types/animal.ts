export type Animal = {
  id: string;
  name: string;
  photos: string[];
  specie: string;
  age: string;
  gender: "M" | "F";
  city?: string;
  tags?: string[];
  compatibilityScore?: number;
};
