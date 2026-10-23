import { render, screen } from "@testing-library/react";

import AnimalCardSkeleton from "./AnimalCardSkeleton";

describe("AnimalCardSkeleton", () => {
  it("does not render medium-specific divs for small cards", () => {
    render(<AnimalCardSkeleton size="small" />);

    expect(screen.queryByTestId("tags")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("compatibility"),
    ).not.toBeInTheDocument();
  });

  it("renders medium-specific divs for medium cards", () => {
    render(<AnimalCardSkeleton size="medium" />);

    expect(screen.getByTestId("tags")).toBeInTheDocument();
    expect(screen.getByTestId("compatibility")).toBeInTheDocument();
  });
});
