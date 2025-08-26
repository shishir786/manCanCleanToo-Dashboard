/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001C54',
        secondary: '#FDFDFD',
        'theme-red': '#FF0D0D',
      },
      fontFamily: {
        'montserrat': ['Montserrat', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
