import { render, screen } from "@testing-library/react";

import PageContainer from "./PageContainer";

describe("PageContainer", () => {
  it("renders its content", () => {
    render(
      <PageContainer>
        <p>Contenu de la page</p>
      </PageContainer>,
    );

    expect(screen.getByText("Contenu de la page")).toBeInTheDocument();
  });
});
