/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        zoomPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        floatUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        zoomPulse: 'zoomPulse 6s ease-in-out infinite',
        floatUpDown: 'floatUpDown 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
