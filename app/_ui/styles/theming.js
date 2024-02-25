"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { colorSystem } from "../designSystem/colourSystem";

/*
1st: Getting App's design system
2nd: Checking user's color-scheme preferences
3rd: Wrapping the App with the ThemeProvider and passing the theme object
*/

export default function ThemeWrapper({ children }) {
  //destructuring the colorSystem object
  const { light, dark } = colorSystem;
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // setIsDarkTheme((prevTheme) => !prevTheme);
  };

  //check user's color-scheme preferences
  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) setIsDarkTheme(true);
  }, []);

  return (
    // <ThemeProvider theme={isDarkTheme ? dark : light} toggleTheme={toggleTheme}>
    <ThemeProvider theme={light} toggleTheme={toggleTheme}>
      {children}
    </ThemeProvider>
  );
}
