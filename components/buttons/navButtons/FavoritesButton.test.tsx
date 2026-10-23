import { fireEvent, render, screen } from "@testing-library/react";
import { usePathname, useRouter } from "next/navigation";

import FavoritesButton from "./FavoritesButton";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe("FavoritesButton", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (usePathname as jest.Mock).mockReturnValue("/");

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it("displays the favorites label", () => {
    render(<FavoritesButton favoritesCount={0} />);

    expect(
      screen.getByRole("button", { name: "favorites-button" }),
    ).toBeInTheDocument();
  });

  describe("favorites counter", () => {
    it("does not display a counter when there are no favorites", () => {
      render(<FavoritesButton favoritesCount={0} />);

      expect(screen.queryByText("0")).not.toBeInTheDocument();
    });

    it("displays the number of favorites", () => {
      render(<FavoritesButton favoritesCount={3} />);

      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("displays 99+ when there are more than 99 favorites", () => {
      render(<FavoritesButton favoritesCount={100} />);

      expect(screen.getByText("99+")).toBeInTheDocument();
    });
  });

  it("navigates to the favorites page when clicked", () => {
    render(<FavoritesButton favoritesCount={3} />);

    fireEvent.click(screen.getByRole("button", { name: "favorites-button" }));

    expect(mockPush).toHaveBeenCalledWith("/favorites");
  });

  describe("active state", () => {
    it("is active when the current page is favorites", () => {
      (usePathname as jest.Mock).mockReturnValue("/favorites");

      render(<FavoritesButton favoritesCount={0} />);

      expect(
        screen.getByRole("button", { name: "favorites-button" }),
      ).toHaveAttribute("aria-current", "page");
    });

    it("is not active when the current page is not favorites", () => {
      (usePathname as jest.Mock).mockReturnValue("/");

      render(<FavoritesButton favoritesCount={0} />);

      expect(
        screen.getByRole("button", { name: "favorites-button" }),
      ).not.toHaveAttribute("aria-current", "page");
    });
  });
});
