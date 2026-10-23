import { fireEvent, render, screen } from "@testing-library/react";

import DotButton from "./DotButton";

describe("DotButton", () => {
  it("calls onClick when clicked", () => {
    const onClick = jest.fn();

    render(
      <DotButton
        isActive={false}
        onClick={onClick}
        ariaLabel="Afficher la photo 2"
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Afficher la photo 2" }),
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("indicates when it is active", () => {
    render(
      <DotButton
        isActive={true}
        onClick={() => {}}
        ariaLabel="Afficher la photo 1"
      />,
    );

    expect(screen.getByRole("button")).toHaveAttribute("aria-current", "true");
  });
});
