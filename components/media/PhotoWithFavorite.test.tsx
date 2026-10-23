import { fireEvent, render, screen } from "@testing-library/react";

import PhotoWithFavorite from "./PhotoWithFavorite";

describe("PhotoWithFavorite", () => {
  it("displays the photo", () => {
    render(
      <PhotoWithFavorite
        src="/images/chon.png"
        alt="Chon"
        isFavorite={false}
        onFavoriteClick={() => {}}
      />,
    );

    const image = screen.getByRole("img", { name: "Chon" });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  it("calls onFavoriteClick when the favorite button is clicked", () => {
    const onFavoriteClick = jest.fn();

    render(
      <PhotoWithFavorite
        src="/images/chon.png"
        alt="Chon"
        isFavorite={false}
        onFavoriteClick={onFavoriteClick}
      />,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(onFavoriteClick).toHaveBeenCalledTimes(1);
  });
});
