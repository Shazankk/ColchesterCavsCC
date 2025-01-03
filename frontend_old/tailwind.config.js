/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      // primary: "#0d1b2a", // Dark blue for section backgrounds
      // secondary: "#1b263b", // Slightly lighter blue for sub-elements
      // accent: "#00b4d8", // Bright blue for highlights
      // highlight: "#4caf50", // Light green for text accents
      // textPrimary: "#ffffff", // White for primary text
      // textSecondary: "#e0e1dd", // Off-white for secondary text
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
  },
  backgroundImage: {
    "hero-pattern": "url('/src/assets/herobg.svg')",
    "main-gradient": "linear-gradient(180deg, #1b263b 0%, #0d1b2a 100%)", // Smooth gradient
  },
};
export const plugins = [];
