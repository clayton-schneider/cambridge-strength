/** @type {import('tailwindcss').Config} */

const FONT_FAMILY_BASE = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
];

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#6BFA0C",
        "text-light": "#FFFFFF",
        dark: "#141515",
      },
      padding: { edge: "2.5%" },
      fontFamily: {
        sans: ["Inter", ...FONT_FAMILY_BASE],
        anton: ["Anton", ...FONT_FAMILY_BASE],
      },
    },
  },
  plugins: [],
};