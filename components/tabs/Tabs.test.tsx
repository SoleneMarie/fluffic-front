import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tabs from "./Tabs";

const items = [
  { label: "Animaux", value: "animals" },
  { label: "Associations", value: "associations" },
];

describe("Tabs", () => {
  it("renders all tabs", () => {
    render(<Tabs items={items} activeTab="animals" onChange={jest.fn()} />);

    expect(screen.getByRole("tab", { name: "Animaux" })).toBeInTheDocument();

    expect(
      screen.getByRole("tab", { name: "Associations" }),
    ).toBeInTheDocument();
  });

  it("calls onChange with the selected tab value", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<Tabs items={items} activeTab="animals" onChange={onChange} />);

    await user.click(screen.getByRole("tab", { name: "Associations" }));

    expect(onChange).toHaveBeenCalledWith("associations");
  });

  it("marks the active tab as selected", () => {
    render(<Tabs items={items} activeTab="animals" onChange={jest.fn()} />);

    expect(screen.getByRole("tab", { name: "Animaux" })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    expect(screen.getByRole("tab", { name: "Associations" })).toHaveAttribute(
      "aria-selected",
      "false",
    );
  });
});
