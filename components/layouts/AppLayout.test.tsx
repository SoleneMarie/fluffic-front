import { fireEvent, render, screen } from "@testing-library/react";

import type { TUser } from "@/types/user";

import AppLayout from "./AppLayout";

jest.mock("./TopNav", () => {
  return function MockTopNav({
    user,
    onMenuClick,
    isMenuOpen,
  }: {
    user?: TUser;
    onMenuClick: () => void;
    isMenuOpen: boolean;
  }) {
    return (
      <div>
        <span data-testid="topnav-username">{user?.username ?? "no-user"}</span>

        <button type="button" aria-expanded={isMenuOpen} onClick={onMenuClick}>
          Toggle menu
        </button>
      </div>
    );
  };
});

jest.mock("./SideMenu", () => {
  return function MockSideMenu({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) {
    return (
      <div>
        <span data-testid="side-menu-state">{isOpen ? "open" : "closed"}</span>

        <button type="button" onClick={onClose}>
          Close menu
        </button>
      </div>
    );
  };
});

describe("AppLayout", () => {
  it("renders its children inside main", () => {
    render(
      <AppLayout>
        <h1>Page content</h1>
      </AppLayout>,
    );

    const main = screen.getByRole("main");

    expect(main).toContainElement(
      screen.getByRole("heading", { name: "Page content" }),
    );
  });

  it("passes the user to TopNav", () => {
    const user = {
      username: "Solène",
    } as TUser;

    render(
      <AppLayout user={user}>
        <p>Page content</p>
      </AppLayout>,
    );

    expect(screen.getByTestId("topnav-username")).toHaveTextContent("Solène");
  });

  it("starts with the side menu closed", () => {
    render(
      <AppLayout>
        <p>Page content</p>
      </AppLayout>,
    );

    expect(screen.getByTestId("side-menu-state")).toHaveTextContent("closed");

    expect(screen.getByRole("button", { name: "Toggle menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("opens the side menu when the menu button is clicked", () => {
    render(
      <AppLayout>
        <p>Page content</p>
      </AppLayout>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));

    expect(screen.getByTestId("side-menu-state")).toHaveTextContent("open");

    expect(screen.getByRole("button", { name: "Toggle menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  it("closes the side menu when onClose is called", () => {
    render(
      <AppLayout>
        <p>Page content</p>
      </AppLayout>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));

    expect(screen.getByTestId("side-menu-state")).toHaveTextContent("closed");

    expect(screen.getByRole("button", { name: "Toggle menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
