/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#0a2540',
        },
        text: {
          primary: '#0a2540',
          secondary: '#425466',
          light: '#627d98',
        },
        accent: {
          purple: '#9a55f8',
          yellow: '#f9c862',
          red: '#ff003e',
          blue: '#90e0ff',
        },
        background: '#faf9f7',
      },
    },
  },
  plugins: [],
};