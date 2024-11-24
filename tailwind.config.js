/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: "#FFEDD5",
          500: "#F97316",
          600: "#EA580C",
        },
        gray: {
          100: "#F3F4F6",
          600: "#4B5563",
        },
      },
      animation: {
        "slow-ping": "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
