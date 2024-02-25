/* 
[+] colorSystem.js [+]
----------------------

This file defines all the different UI color styles
in the app depending on the theme: light or dark
*/

export const colorSystem = {
  light: {
    primary: "#212121",
    secondary: "#ffa200",
    text: "#434345",
    primaryBackgroundColor: "#fff",
    secondaryBackgroundColor: "#f5f5f5", // darker shade
    button: {
      color: "#fff",
      borderColor: "#ffa200",
    },
    card: {},
    status: {},
  },
  dark: {
    primary: "#ffffff", // White or off-white
    secondary: "#8cff66", // Greenish or cyan
    text: "#c4c4c4", // Light gray
    primaryBackgroundColor: "#121212", // Dark gray or black
    secondaryBackgroundColor: "#1f1f1f", // Slightly lighter shade
    button: {
      color: "#121212", // Dark gray or black
      borderColor: "#8cff66", // Greenish or cyan
    },
    card: {
      backgroundColor: "#1f1f1f", // Slightly lighter shade
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    },
    status: {},
  },
};
