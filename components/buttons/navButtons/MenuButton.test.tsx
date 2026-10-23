import { fireEvent, render, screen } from "@testing-library/react";

import MenuButton from "./MenuButton";

describe("MenuButton", () => {
  it("displays the menu label", () => {
    render(<MenuButton onClick={jest.fn()} isOpen={false} />);

    expect(
      screen.getByRole("button", { name: "menu-button" }),
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const mockOnClick = jest.fn();

    render(<MenuButton onClick={mockOnClick} isOpen={false} />);

    fireEvent.click(screen.getByRole("button", { name: "menu-button" }));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  describe("active state", () => {
    it("is active when isOpen is true", () => {
      render(<MenuButton onClick={jest.fn()} isOpen={true} />);

      expect(
        screen.getByRole("button", { name: "menu-button" }),
      ).toHaveAttribute("aria-expanded", "true");
    });

    it("is not active when isOpen is false", () => {
      render(<MenuButton onClick={jest.fn()} isOpen={false} />);

      expect(
        screen.getByRole("button", { name: "menu-button" }),
      ).not.toHaveAttribute("aria-expanded", "true");
    });
  });
});
