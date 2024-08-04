/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cBlack: {
          DEFAULT: '#1D1E20',
        },
        cPink: {
          DEFAULT: '#C953C6',
        },
        cGreen: {
          DEFAULT: '#8DC561',
        },
        cBlue: {
          DEFAULT: '#65C9C7',
        },
      },
      fontFamily: {
        'worksans': ['Work Sans', 'sans-serif'],
        'shrikhand': ['Shrikhand', 'sans-serif'],
        'sourcecodepro': ['Source Code Pro', 'sans-serif'],
      },
      boxShadow: {
        'box-shadow': '-5px 5px 0 0 black',
        'inner-shadow': 'inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}