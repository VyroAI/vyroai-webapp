"use client";
import { useEffect, useState } from "react";

export default function useDarkSide(): [string, (theme: string) => void] {
  let storageTheme: any = "";
  if (typeof window !== "undefined") {
    // do localStorage stuff here
    storageTheme = localStorage.getItem("theme");
  }
  const [theme, setTheme] = useState(storageTheme);

  const colorTheme = theme === "dark" ? "light" : "dark";

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
