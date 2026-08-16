// Library Imports
import React, { useState, useEffect } from "react";
// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// CSS
import "../css/theme-toggle.scss";

type ThemeToggleProps = {
  linkText: string;
};

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    fetchTheme();
  }, []);

  const fetchTheme = () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setIsChecked(true);
    } else if (theme === "light") {
      setIsChecked(false);
    } else {
      setIsChecked(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  };

  const handleChange = () => {
    let theme: "light" | "dark";
    if (isChecked) {
      theme = "light";
    } else {
      theme = "dark";
    }

    localStorage.setItem("theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    setIsChecked(!isChecked);
  };

  return (
    <div className={`switch-wrapper position-relative`}>
      <input
        type="checkbox"
        id="theme-toggle"
        name="themeToggle"
        checked={isChecked}
        onChange={handleChange}
        className={`switch-input`}
      />
      <FontAwesomeIcon
        icon={faSun}
        className={`sun-icon${isChecked ? " not-active" : ""}`}
      />
      <FontAwesomeIcon
        icon={faMoon}
        className={`moon-icon${isChecked ? "" : " not-active"}`}
      />
      <label htmlFor="theme-toggle" className="switch-slider"></label>
    </div>
  );
};

export default ThemeToggle;
