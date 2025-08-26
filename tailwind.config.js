/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',"./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        blue: {
          900: '#1a365d',
          700: '#2c5282',
          100: '#ebf8ff',
        },
        gray: {
          800: '#2d3748',
          700: '#4a5568',
          600: '#718096',
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

