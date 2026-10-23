import { fireEvent, render, screen } from "@testing-library/react";

import CloseButton from "./CloseButton";

describe("CloseButton", () => {
  it("displays the button", () => {
    render(<CloseButton onClose={jest.fn()} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onClose when clicked", () => {
    const mockOnClose = jest.fn();
    render(<CloseButton onClose={mockOnClose} />);

    fireEvent.click(screen.getByRole("button"));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
