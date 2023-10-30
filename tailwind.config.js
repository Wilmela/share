/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        APP_GRAY: "#FFFFFF",
        APP_GREEN: "#48a9a6",
        APP_MILK: "#E4DFDA",
        APP_BLACK: "#212121",
        APP_BROWN: "#d4b483",
      },
    },
  },
  plugins: [],
};
