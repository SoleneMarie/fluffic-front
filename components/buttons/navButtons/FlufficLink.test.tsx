import { render, screen } from "@testing-library/react";

import FlufficLink from "./FlufficLink";

describe("FlufficLink", () => {
  it("should display its children", () => {
    render(<FlufficLink href="/legal-notice">Mentions légales</FlufficLink>);

    expect(
      screen.getByRole("link", { name: "Mentions légales" }),
    ).toBeInTheDocument();
  });

  it("should have the correct destination", () => {
    render(
      <FlufficLink href="/privacy-policy">
        Politique de confidentialité
      </FlufficLink>,
    );

    expect(
      screen.getByRole("link", {
        name: "Politique de confidentialité",
      }),
    ).toHaveAttribute("href", "/privacy-policy");
  });

  it("should be focusable", () => {
    render(<FlufficLink href="/contact">Contact</FlufficLink>);

    const link = screen.getByRole("link", { name: "Contact" });

    link.focus();

    expect(link).toHaveFocus();
  });
});
