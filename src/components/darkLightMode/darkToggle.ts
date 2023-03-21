"use client";
import { useEffect, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);

  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    if (typeof theme === "string") {
      root.classList.add(theme);
    }
    if (typeof theme === "string") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
