/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        nlw: "linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%)",
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
      },
    },
  },
  plugins: [],
};
