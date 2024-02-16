/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-side": { DEFAULT: "#EDF2F1" },
        "main-footer": {
          DEFAULT: "#E3E9E8",
          darker: "#C9CDCC",
        },
        divider: { DEFAULT: "#B7B4B4" },
        "make-schedule-btn": { DEFAULT: "#CCE8E5" },
        "submit-btn": { DEFAULT: "#9DF2EA" },
      },
    },
  },
  plugins: [],
};
