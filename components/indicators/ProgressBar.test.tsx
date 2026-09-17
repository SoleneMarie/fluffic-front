import { screen, render } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders the progress value", () => {
    render(<ProgressBar value={77} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar).toHaveAttribute("aria-valuenow", "77");
    expect(progressBar).toHaveAttribute("aria-valuemin", "0");
    expect(progressBar).toHaveAttribute("aria-valuemax", "100");
  });

  it("limits the value to 100", () => {
    render(<ProgressBar value={145} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar).toHaveAttribute("aria-valuenow", "100");
  });

  it("limits the value to 0", () => {
    render(<ProgressBar value={-25} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar).toHaveAttribute("aria-valuenow", "0");
  });

  it("sets the fill width based on the value", () => {
    render(<ProgressBar value={65} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar.firstElementChild).toHaveStyle({ width: "65%" });
  });
});
