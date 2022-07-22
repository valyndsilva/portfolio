/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
        firacode: "Fira Code, monospace",
        satisfy: "Satisfy, cursive",
        firamono: "Fira Mono, monospace",
      },
    },
  },
  variants: {},
  plugins: [],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
