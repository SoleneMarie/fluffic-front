import { fireEvent, render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";

import SideMenu from "./SideMenu";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockUsePathname = jest.mocked(usePathname);

describe("SideMenu", () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue("/");
  });

  it("does not render when closed", () => {
    render(<SideMenu isOpen={false} onClose={jest.fn()} />);

    expect(
      screen.queryByRole("navigation", {
        name: "Navigation principale",
      }),
    ).not.toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    const { container } = render(
      <SideMenu isOpen={true} onClose={jest.fn()} />,
    );

    expect(container.querySelector('a[href="/animals"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/shelters"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/favorites"]')).toBeInTheDocument();
  });

  it("renders the logout option when a userId is provided", () => {
    const { container } = render(
      <SideMenu isOpen={true} onClose={jest.fn()} userId={"user-1"} />,
    );

    expect(screen.getByRole("button", { name: "logout" })).toBeInTheDocument();
    expect(
      container.querySelector('a[href^="/login"]'),
    ).not.toBeInTheDocument();
  });

  it("renders the login and sign-up options when no userId is provided", () => {
    const { container } = render(
      <SideMenu isOpen={true} onClose={jest.fn()} />,
    );

    expect(container.querySelector('a[href^="/login"]')).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "logout" }),
    ).not.toBeInTheDocument();
  });

  it("calls onClose when the close button or the backdrop is clicked", () => {
    const mockOnClose = jest.fn();
    render(<SideMenu isOpen={true} onClose={mockOnClose} />);

    fireEvent.click(screen.getByRole("button", { name: "Fermer le menu" }));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when the backdrop is clicked", () => {
    const mockOnClose = jest.fn();

    render(<SideMenu isOpen={true} onClose={mockOnClose} />);

    fireEvent.click(screen.getByTestId("side-menu-backdrop"));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when the panel is clicked", () => {
    const mockOnClose = jest.fn();

    render(<SideMenu isOpen={true} onClose={mockOnClose} />);

    fireEvent.click(screen.getByTestId("side-menu-panel"));

    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
