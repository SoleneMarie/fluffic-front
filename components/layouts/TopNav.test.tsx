import { fireEvent, render, screen } from "@testing-library/react";

import type { TUser } from "@/types/user";

import TopNav from "./TopNav";

jest.mock("../titles/FlufficTitle", () => {
  return function MockFlufficTitle({ link }: { link?: string }) {
    return <a href={link}>Fluffic</a>;
  };
});

jest.mock("../buttons/navButtons/ProfileButton", () => {
  return function MockProfileButton({
    userId,
    username,
    avatarUrl,
  }: {
    userId?: string;
    username?: string;
    avatarUrl?: string;
  }) {
    return (
      <div>
        <span data-testid="profile-user-id">{userId ?? "no-user"}</span>
        <span data-testid="profile-username">{username ?? "no-username"}</span>
        <span data-testid="profile-avatar">{avatarUrl ?? "no-avatar"}</span>
      </div>
    );
  };
});

jest.mock("../buttons/navButtons/FavoritesButton", () => {
  return function MockFavoritesButton({
    favoritesCount,
  }: {
    favoritesCount: number;
  }) {
    return <span data-testid="favorites-count">{favoritesCount}</span>;
  };
});

jest.mock("../buttons/navButtons/MenuButton", () => {
  return function MockMenuButton({
    onClick,
    isOpen,
  }: {
    onClick: () => void;
    isOpen: boolean;
  }) {
    return (
      <button type="button" aria-expanded={isOpen} onClick={onClick}>
        Menu
      </button>
    );
  };
});

describe("TopNav", () => {
  it("renders the Fluffic title linking to the homepage", () => {
    render(<TopNav onMenuClick={jest.fn()} isMenuOpen={false} />);

    expect(screen.getByRole("link", { name: "Fluffic" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("passes the user information to ProfileButton", () => {
    const user: TUser = {
      id: "user-123",
      username: "Solène",
      email: "solene@example.com",
      avatarUrl: "/avatar.png",
      favorites: {
        pets: ["pet-1", "pet-2"],
        shelters: ["shelter-1", "shelter-2", "shelter-3"],
      },
      currentPets: [],
    };

    render(<TopNav user={user} onMenuClick={jest.fn()} isMenuOpen={false} />);

    expect(screen.getByTestId("profile-user-id")).toHaveTextContent("user-123");
    expect(screen.getByTestId("profile-username")).toHaveTextContent("Solène");
    expect(screen.getByTestId("profile-avatar")).toHaveTextContent(
      "/avatar.png",
    );
  });

  it("displays zero favorites when there is no user", () => {
    render(<TopNav onMenuClick={jest.fn()} isMenuOpen={false} />);

    expect(screen.getByTestId("favorites-count")).toHaveTextContent("0");
  });

  it("calculates the total number of pet and shelter favorites", () => {
    const user: TUser = {
      id: "user-123",
      username: "Solène",
      email: "solene@example.com",
      avatarUrl: "/avatar.png",
      favorites: {
        pets: ["pet-1", "pet-2"],
        shelters: ["shelter-1", "shelter-2", "shelter-3"],
      },
      currentPets: [],
    };

    render(<TopNav user={user} onMenuClick={jest.fn()} isMenuOpen={false} />);

    expect(screen.getByTestId("favorites-count")).toHaveTextContent("5");
  });

  it("calls onMenuClick when the menu button is clicked", () => {
    const mockOnMenuClick = jest.fn();

    render(<TopNav onMenuClick={mockOnMenuClick} isMenuOpen={false} />);

    fireEvent.click(screen.getByRole("button", { name: "Menu" }));

    expect(mockOnMenuClick).toHaveBeenCalledTimes(1);
  });

  it("passes the menu open state to MenuButton", () => {
    render(<TopNav onMenuClick={jest.fn()} isMenuOpen={true} />);

    expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
