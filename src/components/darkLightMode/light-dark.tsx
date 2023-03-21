"use client";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../darkLightMode/darkToggle";
import { useState } from "react";

export default function LightDarkModeButton() {
  const [colorTheme, setTheme] = useDarkSide();
  const [isDarkMode, setDarkMode] = useState(true);

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
          right: "3rem",
        }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}
