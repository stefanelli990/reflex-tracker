/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1da393'
      },
      animation: {
        customPulse: 'customPulse 1s ease-in-out infinite',
      },
      keyframes: {
        customPulse: {
          // '0%, 100%': { transform: 'rotate(-3deg)' },
          // '50%': { transform: 'rotate(3deg)' },
          '0%': { boxShadow: '0 0 0 0px rgb(29, 163, 147, 0.5)' },
          '100%': { boxShadow: '0 0 0 20px rgb(29, 163, 147, 0)' }
        }
      }
    },
  },
  plugins: [],
}

