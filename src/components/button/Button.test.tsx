import { ComponentProps } from "react";
import { Link } from "@tanstack/react-router";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// Mock Link from @tanstack/react-router as a simple <a> tag
vi.mock("@tanstack/react-router", async () => {
  const actual = await vi.importActual("@tanstack/react-router");
  return {
    ...actual,
    Link: ({ children, to, ...props }: ComponentProps<typeof Link>) => {
      if (typeof children === "function") {
        throw new Error("Children must be a React node, not a function");
      }
      return (
        <a href={to} {...props}>
          {children}
        </a>
      );
    },
  };
});

describe("Button", () => {
  it("renders the button with text and link role", () => {
    render(
      <Button variant="primary" buttonSize="large" text="click me" url="/" />
    );
    expect(screen.getByRole("link", { name: /click me/i })).toBeInTheDocument();
  });

  it("renders as a button when no url is provided", () => {
    render(<Button variant="primary" buttonSize="large" text="submit" />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("disables the button when disabled prop is true", () => {
    render(<Button text="save" variant="primary" disabled />);
    expect(screen.getByRole("button", { name: /save/i })).toBeDisabled();
  });

  it("shows loader instead of text when loading", () => {
    render(<Button variant="primary" text="loading" loading />);
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders a left icon", () => {
    render(
      <Button text="icon test" variant="primary" icon={faCoffee} leftIcon />
    );
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("calls onClickHandler when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button variant="primary" text="click" onClickHandler={handleClick} />
    );
    screen.getByRole("button").click();
    expect(handleClick).toHaveBeenCalled();
  });
});
