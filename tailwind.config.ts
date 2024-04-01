import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'parallax': 'url("/parallax.png")',
      },
      "colors": {
        "white": "#fff",
        "black": "#000",
        "dimgray": "#6a6a6a",
        "gray": {
        "100": "rgba(0, 0, 0, 0)",
        "200": "rgba(0, 0, 0, 0.51)"
        }},
      "spacing": {},
      "fontFamily": {
        "kaisei-opti": "'Kaisei Opti'",
        "inter": "Inter",
        "judson": "Judson",
        "alata": "Alata"
      },
      "fontSize": {
        "51xl": "4.375rem",
        "inherit": "inherit"
        }
    }
  },
  plugins: [],
};
export default config;
