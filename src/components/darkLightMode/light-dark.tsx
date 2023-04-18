"use client";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../darkLightMode/darkToggle";
import { useState } from "react";

import { useTheme } from "next-themes";

export default function LightDarkModeButton() {
  const [colorTheme, setTheme] = useDarkSide();
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme === "light" ? "light" : "dark");
    setDarkMode(checked);
  };
  return (
    <>
      <DarkModeSwitch
        style={{
          bottom: "2rem",
          position: "fixed",
          right: "2rem",
        }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}
