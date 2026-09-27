import { render, screen } from "@testing-library/react";
import PinCity from "./PinCity";

describe("PinCity", () => {
  it("displays the city", () => {
    render(<PinCity city="La Valette-du-Var" />);

    expect(screen.getByText("La Valette-du-Var")).toBeInTheDocument();
  });
});