import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("displays the footer navigation links", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", { name: "Mentions légales" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Politique de confidentialité" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("links to the correct pages", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", { name: "Mentions légales" }),
    ).toHaveAttribute("href", "/legal-notice");

    expect(
      screen.getByRole("link", { name: "Politique de confidentialité" }),
    ).toHaveAttribute("href", "/privacy-policy");

    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("displays the current year in the copyright", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();

    expect(screen.getAllByText(`© ${currentYear} Fluffic`)).toHaveLength(2);
  });

  it("has an accessible secondary navigation", () => {
    render(<Footer />);

    expect(
      screen.getByRole("navigation", { name: "Navigation secondaire" }),
    ).toBeInTheDocument();
  });
});
