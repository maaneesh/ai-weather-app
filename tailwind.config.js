/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      orange: "#FFA62B",
      caribbean: "#16697A",
      moonstone: "#489FB5",
      skyblue: "#82C0CC",
      isabelline: "#EDE7E3",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
