import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ConsentBanner from "./ConsentBanner";
import { ButtonProps } from "../button/dependents/types-and-interfaces/ButtonProps";

// Mock hook
vi.mock("../../hooks/useGlobalPrivacyControl", () => ({
  default: vi.fn(),
}));

// Mock Button component
vi.mock("../button/Button", () => ({
  Button: ({
    text,
    onClickHandler,
  }: {
    text?: string;
    onClickHandler?: () => void;
  }) => (
    <button data-testid="button" onClick={onClickHandler}>
      {text}
    </button>
  ),
}));

import useGlobalPrivacyControl from "../../hooks/useGlobalPrivacyControl";

const mockedGPC = vi.mocked(useGlobalPrivacyControl);

/* -------------------------------------------------------------------------- */
/*                               Test Helpers                                 */
/* -------------------------------------------------------------------------- */

const baseProps: {
  bodyText: string;
  button1: ButtonProps;
  button2: ButtonProps;
} = {
  bodyText: "We use cookies",
  button1: {
    text: "Accept",
    variant: "primary",
    buttonSize: "small",
  },
  button2: {
    text: "Decline",
    variant: "primary-outline",
    buttonSize: "small",
  },
};

/* -------------------------------------------------------------------------- */
/*                                   Tests                                    */
/* -------------------------------------------------------------------------- */

describe("ConsentBanner", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // cookie reset
    document.cookie
      .split(";")
      .forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
      });

    mockedGPC.mockReturnValue(false);
  });

  it("renders banner when no cookie and no GPC", () => {
    render(<ConsentBanner {...baseProps} />);

    expect(screen.getByText("We use cookies")).toBeInTheDocument();
    expect(screen.getByText("Accept")).toBeInTheDocument();
    expect(screen.getByText("Decline")).toBeInTheDocument();
  });

  it("does not render if cookie already exists", () => {
    document.cookie = "cookieConsent=true";

    render(<ConsentBanner {...baseProps} />);

    expect(screen.queryByText("We use cookies")).not.toBeInTheDocument();
  });

  it("does not render if global privacy control is enabled", () => {
    mockedGPC.mockReturnValue(true);

    render(<ConsentBanner {...baseProps} />);

    expect(screen.queryByText("We use cookies")).not.toBeInTheDocument();
  });

  it("accept sets cookie, hides banner, and dispatches event", () => {
    const dispatchSpy = vi.spyOn(window, "dispatchEvent");

    render(<ConsentBanner {...baseProps} />);

    fireEvent.click(screen.getByText("Accept"));

    expect(document.cookie).toContain("cookieConsent=true");

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "cookie-consent-accepted",
      }),
    );

    expect(screen.queryByText("We use cookies")).not.toBeInTheDocument();
  });

  it("decline sets cookie, hides banner, and dispatches event", () => {
    const dispatchSpy = vi.spyOn(window, "dispatchEvent");

    render(<ConsentBanner {...baseProps} />);

    fireEvent.click(screen.getByText("Decline"));

    expect(document.cookie).toContain("cookieConsent=false");

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "cookie-consent-declined",
      }),
    );

    expect(screen.queryByText("We use cookies")).not.toBeInTheDocument();
  });
});