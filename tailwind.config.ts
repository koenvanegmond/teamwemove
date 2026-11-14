import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: { sm: "480px", md: "768px", lg: "1100px", xl: "1400px" },
    extend: {
      colors: {
        brand: { DEFAULT: "#0E3CA0", dark: "#0A2B75", soft: "#EAF0FF" },
        sun: { DEFAULT: "#FF9F0A", dark: "#E68A00" },
        ink: "#0B1226",
        paper: "#ECEDEF",
      },
      fontFamily: {
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      container: { center: true, padding: { DEFAULT: "20px", lg: "56px" } },
    },
  },
  plugins: [],
};

export default config;
