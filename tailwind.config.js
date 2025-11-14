/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      colors: {
        brand: {
        50: '#f5f9ff',
        100: '#e6f0ff',
        200: '#bcd8ff',
        500: '#1E6FFF', // primary blue
        700: '#155bd6'
        }
      }
    }
  },
  plugins: []
};

