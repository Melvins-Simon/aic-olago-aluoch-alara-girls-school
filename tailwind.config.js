/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "450px",
      },
      colors: {
        "primary-blue": "rgb(0,0,128)",
        "primary2-blue": "rgb(24,24,88)",
        "bg-Light": "#f8fafc",
        "bg-Dark": "#1a1a1a",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
