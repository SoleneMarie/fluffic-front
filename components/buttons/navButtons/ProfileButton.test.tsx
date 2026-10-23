import { fireEvent, render, screen } from "@testing-library/react";
import { usePathname, useRouter } from "next/navigation";

import ProfileButton from "./ProfileButton";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe("ProfileButton", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (usePathname as jest.Mock).mockReturnValue("/");

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  describe("when the user is not connected", () => {
    it("displays the login label", () => {
      render(<ProfileButton />);

      expect(
        screen.getByRole("button", { name: "profile-button" }),
      ).toBeInTheDocument();
    });

    it("displays the user icon", () => {
      const { container } = render(<ProfileButton />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("navigates to the login page when clicked", () => {
      render(<ProfileButton />);

      fireEvent.click(screen.getByRole("button", { name: "profile-button" }));

      expect(mockPush).toHaveBeenCalledWith("/login");
    });
  });

  describe("when the user is connected", () => {
    it("displays the profile label", () => {
      render(<ProfileButton userId="user-123" username="Solène" />);

      expect(
        screen.getByRole("button", { name: "profile-button" }),
      ).toBeInTheDocument();
    });

    it("displays the first letter of the username when there is no avatar", () => {
      render(<ProfileButton userId="user-123" username="Solène" />);

      expect(screen.getByText("S")).toBeInTheDocument();
    });

    it("displays the avatar when an avatar URL is provided", () => {
      render(
        <ProfileButton
          userId="user-123"
          username="Solène"
          avatarUrl="/avatar.png"
        />,
      );

      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("navigates to the user's profile when clicked", () => {
      render(<ProfileButton userId="user-123" username="Solène" />);

      fireEvent.click(screen.getByRole("button", { name: "profile-button" }));

      expect(mockPush).toHaveBeenCalledWith("/profile/user-123");
    });
  });
});
