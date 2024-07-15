/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tosca: '#008080',
        tosca200: '#006666',
        sage: '#9DC183', 
        red800: '#7F1D1D', 
        orange300: '#F59E0B', 
        darkRed: '#A42D25', 
        lightOrange: '#F2A86A',
      },
    },
  },
  plugins: [],
}

