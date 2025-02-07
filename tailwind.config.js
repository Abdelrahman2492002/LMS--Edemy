/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outFit: ["Outfit", "serif"],
      },
      fontSize: {
        "home-heading-small": ["28px", "36px"],
        "home-heading-large": ["46px", "56px"],
        default: ["15px", "18px"],
      },
    },
  },
  plugins: [],
};
