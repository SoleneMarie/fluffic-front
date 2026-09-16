import { render, screen } from "@testing-library/react";
import PageContainer from "./PageContainer";

describe("PageContainer", () => {
  it("renders its content inside the main element", () => {
    render(
      <PageContainer>
        <p>Contenu de la page</p>
      </PageContainer>,
    );

    const main = screen.getByRole("main");

    expect(main).toContainElement(screen.getByText("Contenu de la page"));
  });
});
