/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F95454",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
