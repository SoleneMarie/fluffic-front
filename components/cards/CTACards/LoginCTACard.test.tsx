import { fireEvent, render, screen } from "@testing-library/react";
import LoginCTACard from "./LoginCTACard";

describe("LoginCTACard", () => {
  it("calls onLogin when the main action is clicked", () => {
    const onLogin = jest.fn();
    const onCreateAccount = jest.fn();

    render(
      <LoginCTACard onLogin={onLogin} onCreateAccount={onCreateAccount} />,
    );

    const [loginButton] = screen.getAllByRole("button");

    fireEvent.click(loginButton);

    expect(onLogin).toHaveBeenCalledTimes(1);
  });

  it("calls onCreateAccount when the secondary action is clicked", () => {
    const onLogin = jest.fn();
    const onCreateAccount = jest.fn();

    render(
      <LoginCTACard onLogin={onLogin} onCreateAccount={onCreateAccount} />,
    );

    const [, createAccountButton] = screen.getAllByRole("button");

    fireEvent.click(createAccountButton);

    expect(onCreateAccount).toHaveBeenCalledTimes(1);
  });
});
