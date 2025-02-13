/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outFit: ["Outfit", "serif"],
        inter: ["Inter", "serif"],
      },
      fontSize: {
        "home-heading-small": ["28px", "36px"],
        "home-heading-large": ["46px", "56px"],
        default: ["15px", "18px"],
      },
      boxShadow: {
        testimonialCard: "0px 4px 15px rgba(0, 0, 0, 0.05)",
      },
      backgroundColor: {
        lightGray: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
