import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9357FF",
      },
      screens: {
        xs: "435px", // => @media (min-width: 435px) { ... }
        sm: "640px", // => @media (min-width: 640px) { ... }
        md: "768px", // => @media (min-width: 768px) { ... }
        lg: "1024px", // => @media (min-width: 1024px) { ... }
        xl: "1280px", // => @media (min-width: 1280px) { ... }
        "2xl": "1440px", // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        semiBold: ["PPPangramSansRounded-Semibold", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;