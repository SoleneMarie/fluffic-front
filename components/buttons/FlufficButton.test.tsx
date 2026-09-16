import { fireEvent, render, screen } from "@testing-library/react";
import FlufficButton from "./FlufficButton";

describe("FlufficButton", () => {
  it("renders a button with its content", () => {
    render(<FlufficButton>Créer mon profil</FlufficButton>);

    expect(
      screen.getByRole("button", { name: "Créer mon profil" }),
    ).toBeInTheDocument();
  });

  it("is disabled when disabled is provided", () => {
    render(<FlufficButton disabled>Créer mon profil</FlufficButton>);

    expect(
      screen.getByRole("button", { name: "Créer mon profil" }),
    ).toBeDisabled();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();

    render(
      <FlufficButton onClick={handleClick}>Créer mon profil</FlufficButton>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Créer mon profil" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();

    render(
      <FlufficButton disabled onClick={handleClick}>
        Créer mon profil
      </FlufficButton>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Créer mon profil" }));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders an icon when provided", () => {
    render(
      <FlufficButton
        icon={<svg data-testid="button-icon" aria-hidden="true" />}
      >
        Rencontrer les animaux
      </FlufficButton>,
    );

    expect(screen.getByTestId("button-icon")).toBeInTheDocument();
  });
});
