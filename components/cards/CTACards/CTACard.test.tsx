import { fireEvent, render, screen } from "@testing-library/react";
import CTACard from "./CTACard";

const defaultProps = {
  title: "Titre",
  description: "Description",
  illustration: "/images/perfect-match-illustration.png",
  buttonLabel: "Action",
  onClick: () => {},
};

describe("CTACard", () => {
  it("calls onClick when the action button is clicked", () => {
    const onClick = jest.fn();

    render(<CTACard {...defaultProps} onClick={onClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });


  it("displays the default footer when no footer is provided", () => {
    render(<CTACard {...defaultProps} />);

    expect(screen.getByText("2 minutes")).toBeInTheDocument();
  });

  it("displays the provided footer instead of the default footer", () => {
    render(
      <CTACard
        {...defaultProps}
        footer={<span data-testid="custom-footer">Custom footer</span>}
      />,
    );

    expect(screen.getByTestId("custom-footer")).toBeInTheDocument();
    expect(screen.queryByText("2 minutes")).not.toBeInTheDocument();
  });
});
