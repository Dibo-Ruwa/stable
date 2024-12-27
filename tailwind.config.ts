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
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customBlue: "#1DA1F2",
        black: "#000000",
        redText: "#ef5a5a",
        cartCardColor: "rgba(248, 248, 248, 0.87)",
        textColor: "#2a2a2a",
        starColor: "#ffc93f",
        ratingTextColor: "#3f3f3f",
        greenText: "#27a124",
        bgCounter: "#f6f6f6",
        bgBtn: "rgba(183, 224, 182, 0.20)",
      },
      borderWidth: {
        btn: "1px",
      },
      borderColor: {
        btn: "var(--green2, #4BB149)",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
