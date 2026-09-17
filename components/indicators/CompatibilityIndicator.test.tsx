import { render, screen } from "@testing-library/react";
import CompatibilityIndicator from "./CompatibilityIndicator";

describe("CompatibilityIndicator", () => {
  it("renders a questionnaire link when compatibility is unavailable", () => {
    render(<CompatibilityIndicator />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
  });

  it("renders the progress bar when compatibility is available", () => {
    render(<CompatibilityIndicator value={77} />);

    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "77",
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("handles zero as a valid compatibility value", () => {
    render(<CompatibilityIndicator value={0} />);

    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "0",
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
