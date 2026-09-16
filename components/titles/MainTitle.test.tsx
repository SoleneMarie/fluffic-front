import { render, screen } from "@testing-library/react";
import MainTitle from "./MainTitle";

describe("MainTitle", () => {
  it("renders the title as an h1", () => {
    render(<MainTitle titleText="Mes coups de cœur" />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Mes coups de cœur",
      }),
    ).toBeInTheDocument();
  });

  it("renders the subtitle when provided", () => {
    render(
      <MainTitle
        titleText="Mes coups de cœur"
        subtitleText="Retrouvez ici tous vos favoris."
      />,
    );

    expect(
      screen.getByText("Retrouvez ici tous vos favoris."),
    ).toBeInTheDocument();
  });

  it("renders the icon when provided", () => {
    render(
      <MainTitle
        titleText="Mes coups de cœur"
        icon={<span data-testid="title-icon">♥</span>}
      />,
    );

    expect(screen.getByTestId("title-icon")).toBeInTheDocument();
  });
});
