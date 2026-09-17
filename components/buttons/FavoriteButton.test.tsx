import { fireEvent, render, screen } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";

describe("FavoriteButton", () => {
  it("has an accessible label when unselected", () => {
    render(<FavoriteButton />);

    expect(
      screen.getByRole("button", { name: "Ajouter aux favoris" }),
    ).toBeInTheDocument();
  });

  it("has an accessible label when selected", () => {
    render(<FavoriteButton selected />);

    expect(
      screen.getByRole("button", { name: "Retirer des favoris" }),
    ).toBeInTheDocument();
  });

  it("reflects its selected state with aria-pressed", () => {
    const { rerender } = render(<FavoriteButton />);

    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");

    rerender(<FavoriteButton selected />);

    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();

    render(<FavoriteButton onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();

    render(<FavoriteButton disabled onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
