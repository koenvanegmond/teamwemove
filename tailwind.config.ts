import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1100px",
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0E3CA0",
          dark: "#0A2B75",
          soft: "#EAF0FF",
        },
        ink: "#0B1226",
      },
      container: {
        center: true,
        padding: { DEFAULT: "20px", lg: "40px" },
      },
    },
  },
  plugins: [],
};

export default config;
