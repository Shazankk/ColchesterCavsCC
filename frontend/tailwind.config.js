const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "./node_modules/flowbite-react/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "pastel-blue-light": "#d0e7ff", // Light pastel blue
      "pastel-blue-dark": "#a3cfff", // Slightly darker pastel blue
      "soft-gray-light": "#f7fafc", // Very light gray
      "soft-gray-dark": "#e2e8f0", // Light gray
    },
  },
  plugins: [flowbite.plugin(), require("flowbite/plugin")],
};
