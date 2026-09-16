import { render, screen } from "@testing-library/react";
import SectionTitle from "./SectionTitle";

describe("SectionTitle", () => {
  it("renders the title as an h2", () => {
    render(<SectionTitle>Animaux</SectionTitle>);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Animaux",
      }),
    ).toBeInTheDocument();
  });
});
