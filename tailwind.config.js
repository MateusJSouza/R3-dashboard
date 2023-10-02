/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 22rem) 1fr',
      },
      colors: {
        primary: '#05004E',

        greys: {
          900: '#151D48',
          700: '#737791',
        },
      },
    },
  },
  plugins: [],
}
