import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "100": "25rem",
        "125": "31.25rem",
        "150": "37.5rem",
        "200": "50rem",
        "250": "62.5rem",
        "300": "75rem",
      },
      width: {
        "50": "12.5rem",
        "75": "18.75rem",
        "100": "25rem",
        "112.5": "28.125rem",
        "125": "31.25rem",
      },
      borderWidth: {
        "15": "15px",
        "10": "10px",
      },
    },
  },
  plugins: [],
};

export default config;
