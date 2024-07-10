/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-dark-transparent': 'rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

