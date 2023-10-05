/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      table: ['Open Sans', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        card: '1fr 26.25rem',
      },
      fontSize: {
        'table': '13px'
      },
      borderRadius: {
        20: '1.25rem',
      },
      colors: {
        dark: '#333333',

        primary: {
          200: '#7B91B0',
          900: '#05004E',
          800: '#4079ED',
          'dark-shade': '#05004E',
        },

        supportingColor: {
          green: '#3CD856',
          'green-shade': '#E2FFF3',

          'violet-shade': '#FBF1FF',

          yellow: '#FFA412',
          'yellow-shade': '#FFFAF1',
        },

        green: {
          50: '#F0FDF4',
          100: '#DCFCE7',
        },

        lightBlue: {
          50: '#F0F9FF',
        },

        greys: {
          50: '#F0F0F0',
          100: '#FFFFFF',
          300: '#F9FAFB',
          700: '#737791',
          800: '#444A6D',
          900: '#151D48',
        },
      },
    },
  },
  plugins: [],
}
