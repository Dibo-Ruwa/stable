// import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html", // Additional paths, e.g., your HTML entry
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1DA1F2",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
