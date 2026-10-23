import { render, screen } from "@testing-library/react";

import FlufficTitle from "./FlufficTitle";

describe("FlufficTitle", () => {
  it("renders the Fluffic name", () => {
    render(<FlufficTitle />);

    expect(screen.getByText("Fluffic")).toBeInTheDocument();
  });

  it("reverses the elements order in large size", () => {
    const { container } = render(<FlufficTitle size="large" />);

    expect(container.firstChild).toHaveClass("flex-col-reverse");
  });

  describe("navigation", () => {
    it("renders a link when a destination is provided", () => {
      render(<FlufficTitle link="/" />);

      expect(screen.getByRole("link", { name: /fluffic/i })).toHaveAttribute(
        "href",
        "/",
      );
    });

    it("does not render a link when no destination is provided", () => {
      render(<FlufficTitle />);

      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
  });
});
