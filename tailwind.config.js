import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#e0de2b",
        "custom-green": "#65b344",
      },
      backgroundImage: {
        home: "url(/bg.svg)",
      },
      backgroundSize: {
        "home-xl": "50%",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
