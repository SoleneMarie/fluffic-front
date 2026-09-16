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
});
