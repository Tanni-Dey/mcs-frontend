/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Roboto", "sans-serif"],
    },
    extend: {
      // colors: {
      //   primary: "#659ffc",
      //   secondary: "#450085",
      // },
    },
  },
  plugins: [require("daisyui")],
};
