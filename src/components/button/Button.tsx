// Library Imports
import { FC } from "react";
import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interfaces and Types
import { ButtonProps } from "./dependents/types-and-interfaces/ButtonProps";
// Components
import { Loader } from "../general-page-layout/loader/Loader";
// CSS
import "./dependents/css/button.scss";

export const Button: FC<ButtonProps> = ({
  text,
  variant = "primary",
  icon,
  customIcon = null,
  leftIcon = false,
  rightIcon = false,
  loading = false,
  disabled = false,
  onClickHandler,
  type = "button",
  url,
  buttonId = null,
  additionalClassNames,
  buttonSize = "small",
}) => {
  const renderButtonContent = () => {
    const loaderVariant = variant.includes("dark") ? "primary" : "neutral";

    return (
      <>
        {leftIcon &&
          (customIcon ??
            (icon && (
              <FontAwesomeIcon
                icon={icon}
                className="left-icon"
                data-testid="left-icon"
              />
            )))}
        {loading ? (
          <Loader variant={loaderVariant} />
        ) : (
          <b className="button-text">{text}</b>
        )}
        {rightIcon && icon && (
          <FontAwesomeIcon
            icon={icon}
            className="right-icon"
            data-testid="right-icon"
          />
        )}
      </>
    );
  };

  const buttonClasses = [
    "button",
    leftIcon && "icon-left",
    rightIcon && "icon-right",
    `${variant}-button`,
    loading && "button-loading",
    additionalClassNames,
    `${buttonSize}-button`,
  ]
    .filter(Boolean)
    .join(" ");

  if (url) {
    return (
      <Link
        to={url}
        params={(current) => current}
        search={(current) => current}
        className={`${buttonClasses} no-underline`}
      >
        {renderButtonContent()}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClickHandler}
      type={type}
      id={buttonId || undefined}
    >
      {renderButtonContent()}
    </button>
  );
};
