import { render, screen } from "@testing-library/react";
import MainTitle from "./MainTitle";

describe("MainTitle", () => {
  it("renders the title as an h1", () => {
    render(<MainTitle>Mes coups de cœur</MainTitle>);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Mes coups de cœur",
      }),
    ).toBeInTheDocument();
  });

  it("renders the subtitle when provided", () => {
    render(
      <MainTitle subtitle="Retrouvez ici tous vos favoris.">
        Mes coups de cœur
      </MainTitle>,
    );

    expect(
      screen.getByText("Retrouvez ici tous vos favoris."),
    ).toBeInTheDocument();
  });

  it("renders the icon when provided", () => {
    render(
      <MainTitle icon={<span data-testid="title-icon">♥</span>}>
        Mes coups de cœur
      </MainTitle>,
    );

    expect(screen.getByTestId("title-icon")).toBeInTheDocument();
  });
});
