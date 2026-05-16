import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071827",
        ink: "#102235",
        gold: "#C8A24A",
        sand: "#E9DCC3",
        pearl: "#F7F4EE",
        mist: "#EEF1F4"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(7, 24, 39, 0.12)",
        glow: "0 16px 45px rgba(200, 162, 74, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
