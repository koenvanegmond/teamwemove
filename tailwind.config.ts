import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: { sm: "480px", md: "768px", lg: "1100px", xl: "1400px" },
    extend: {
      colors: {
        brand: { DEFAULT: "#0E3CA0", dark: "#0A2B75", soft: "#EAF0FF" },
        coral: { DEFAULT: "#E5484D", dark: "#C2373C" },
        ink: "#0B1226",
        paper: "#ECEDEF",
      },
      fontFamily: {
        sans: ["var(--font-supreme)", "system-ui", "sans-serif"],
      },
      container: { center: true, padding: { DEFAULT: "20px", lg: "56px" } },
    },
  },
  plugins: [],
};

export default config;
