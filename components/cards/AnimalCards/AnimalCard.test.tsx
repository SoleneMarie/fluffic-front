import { fireEvent, render, screen } from "@testing-library/react";

import { Animal } from "@/types/animal";

import AnimalCard from "./AnimalCard";

jest.mock(
  "../../indicators/CompatibilityIndicator",
  () =>
    function MockCompatibilityIndicator() {
      return <div data-testid="compatibility-indicator" />;
    },
);

jest.mock(
  "../../media/PhotoCarousel",
  () =>
    function MockPhotoCarousel({
      isFavorite,
      onFavoriteClick,
    }: {
      isFavorite: boolean;
      onFavoriteClick: () => void;
    }) {
      return (
        <div data-testid="photo-carousel">
          <button
            type="button"
            aria-label={
              isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"
            }
            onClick={(event) => {
              event.stopPropagation();
              onFavoriteClick();
            }}
          >
            Favori
          </button>
        </div>
      );
    },
);

const mockAnimal: Animal = {
  id: "animal-1",
  name: "Chon",
  photos: ["/images/chon.png", "/images/chon-2.png"],
  city: "La Valette-du-Var",
  tags: ["joueur", "câlin", "espiègle"],
  age: "2 ans et demi",
  compatibilityScore: 72,
  gender: "M",
  specie: "cochon d'Inde",
};

describe("AnimalCard", () => {
  const defaultProps = {
    size: "medium" as const,
    animal: mockAnimal,
    isFavorite: false,
    onFavoriteClick: jest.fn(),
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("displays the animal information", () => {
    render(<AnimalCard {...defaultProps} />);

    expect(screen.getByText("Chon")).toBeInTheDocument();
    expect(screen.getByText("cochon d'Inde")).toBeInTheDocument();
    expect(screen.getByText("2 ans et demi")).toBeInTheDocument();
    expect(screen.getByText("La Valette-du-Var")).toBeInTheDocument();
  });

  it("displays tags on medium cards", () => {
    render(<AnimalCard {...defaultProps} />);

    expect(screen.getByText("joueur")).toBeInTheDocument();
    expect(screen.getByText("câlin")).toBeInTheDocument();
    expect(screen.getByText("espiègle")).toBeInTheDocument();
  });

  it("does not display tags on small cards", () => {
    render(<AnimalCard {...defaultProps} size="small" />);

    expect(screen.queryByText("joueur")).not.toBeInTheDocument();
    expect(screen.queryByText("câlin")).not.toBeInTheDocument();
    expect(screen.queryByText("espiègle")).not.toBeInTheDocument();
  });

  it("calls onClick when the card is clicked", () => {
    render(<AnimalCard {...defaultProps} />);

    fireEvent.click(screen.getByText("Chon"));

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("displays compatibility on medium cards", () => {
    render(<AnimalCard {...defaultProps} size="medium" />);

    expect(screen.getByTestId("compatibility-indicator")).toBeInTheDocument();
  });

  it("does not display compatibility on small cards", () => {
    render(<AnimalCard {...defaultProps} size="small" />);

    expect(
      screen.queryByTestId("compatibility-indicator"),
    ).not.toBeInTheDocument();
  });

  it("calls onFavoriteClick without triggering the card click", () => {
    render(<AnimalCard {...defaultProps} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Ajouter aux favoris" }),
    );

    expect(defaultProps.onFavoriteClick).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
