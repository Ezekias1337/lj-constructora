import { useEffect } from "react";

const useTheme = () => {
  useEffect(() => {
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      document.body.classList.add(savedTheme);
    } else {
      // No saved preference: fall back to system setting
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.body.classList.add(prefersDark ? "dark" : "light");
    }
  }, []);
};

export default useTheme;
