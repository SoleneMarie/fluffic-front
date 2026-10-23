import { render, screen } from "@testing-library/react";

import AnimalMainInfos from "./AnimalMainInfos";
import { AnimalMainInfosProps } from "./AnimalMainInfos";

jest.mock("../../icons/MaleIcon", () => {
  return function MockMaleIcon() {
    return <svg data-testid="male-icon" />;
  };
});

jest.mock("../../icons/FemaleIcon", () => {
  return function MockFemaleIcon() {
    return <svg data-testid="female-icon" />;
  };
});

describe("AnimalMainInfos", () => {
  const defaultProps: AnimalMainInfosProps = {
    size: "medium",
    name: "Chicotin",
    specie: "Cochon d'Inde",
    age: "2 ans et demi",
    gender: "M",
    city: "La Valette-du-Var",
  };

  it("renders the animal main information", () => {
    render(<AnimalMainInfos {...defaultProps} />);

    expect(screen.getByText("Chicotin")).toBeInTheDocument();
    expect(screen.getByText("Cochon d'Inde")).toBeInTheDocument();
    expect(screen.getByText("2 ans et demi")).toBeInTheDocument();
    expect(screen.getByText("La Valette-du-Var")).toBeInTheDocument();
  });

  it("renders the male icon for a male animal", () => {
    render(<AnimalMainInfos {...defaultProps} gender="M" />);

    expect(screen.getByTestId("male-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("female-icon")).not.toBeInTheDocument();
  });

  it("renders the female icon for a female animal", () => {
    render(<AnimalMainInfos {...defaultProps} gender="F" />);

    expect(screen.getByTestId("female-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("male-icon")).not.toBeInTheDocument();
  });

  it("renders the city for the medium size", () => {
    render(<AnimalMainInfos {...defaultProps} size="medium" />);

    expect(screen.getByText("La Valette-du-Var")).toBeInTheDocument();
  });

  it("does not render the city for the small size", () => {
    render(<AnimalMainInfos {...defaultProps} size="small" />);

    expect(screen.queryByText("La Valette-du-Var")).not.toBeInTheDocument();
  });

  it("does not render the city when none is provided", () => {
    render(<AnimalMainInfos {...defaultProps} city={undefined} />);

    expect(screen.queryByText("La Valette-du-Var")).not.toBeInTheDocument();
  });
});
