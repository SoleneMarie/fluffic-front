import { fireEvent, render, screen } from "@testing-library/react";

import SideMenuNavOption from "./SideMenuNavOption";

describe("SideMenuNavOption", () => {
  it("displays the provided label and icon", () => {
    render(
      <SideMenuNavOption
        label="Animaux"
        icon={<svg data-testid="test-icon" />}
        href="/animals"
      />,
    );

    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    expect(screen.getByText("Animaux")).toBeInTheDocument();
  });

  it("renders a link when href is provided", () => {
    render(
      <SideMenuNavOption
        label="Animaux"
        icon={<svg data-testid="test-icon" />}
        href="/animals"
      />,
    );

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/animals");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("calls onClick when the provided button is clicked", () => {
    const mockOnClick = jest.fn();

    render(
      <SideMenuNavOption
        label="Animaux"
        icon={<svg data-testid="test-icon" />}
        onClick={mockOnClick}
      />,
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
