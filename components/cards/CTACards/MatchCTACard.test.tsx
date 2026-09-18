import { fireEvent, render, screen } from "@testing-library/react";
import MatchCTACard from "./MatchCTACard";

describe("MatchCTACard", () => {
  it("calls onClick when the action button is clicked", () => {
    const onClick = jest.fn();

    render(<MatchCTACard onClick={onClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
