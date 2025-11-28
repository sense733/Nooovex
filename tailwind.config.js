/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        primary: '#E5E5E5',
        secondary: '#737373',
      },
      animation: {
        'melancholy-breath': 'melancholy-breath 12s ease-in-out infinite',
        'blob-move': 'blob-move 20s ease-in-out infinite alternate',
      },
      keyframes: {
        'melancholy-breath': {
          '0%, 50%, 100%': { filter: 'blur(0px)', opacity: '1', transform: 'scale(1) rotate(0deg)' },
          '25%': { filter: 'blur(2px)', opacity: '0.7', transform: 'scale(0.98) rotate(-2deg)' },
          '75%': { filter: 'blur(2px)', opacity: '0.7', transform: 'scale(0.98) rotate(2deg)' },
        },
        'blob-move': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(20px, -20px) scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}

