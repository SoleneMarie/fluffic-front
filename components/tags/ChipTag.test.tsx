import { render, screen } from "@testing-library/react";
import ChipTag from "./ChipTag";

describe("ChipTag", () => {
  it("renders its content", () => {
    render(<ChipTag>Dynamique</ChipTag>);

    expect(screen.getByText("Dynamique")).toBeInTheDocument();
  });
});
