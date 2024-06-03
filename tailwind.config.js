/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-background-1": "#0F1014",
      },
      boxShadow: {
        "custom-shadow": "0 2px 4px rgba(0, 0, 0, 0.0485)",
      },
      fontFamily: {
        roca: ['"FONTSPRING DEMO - Roca One Rg"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
