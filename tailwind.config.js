/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon': '#00FF88',
        'dark': '#0A0A0A',
        'surface': '#1A1A1A',
        'subtle': '#F5F5F5',
      },
      fontFamily: {
        'display': ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00FF88, 0 0 10px #00FF88, 0 0 15px #00FF88' },
          '100%': { boxShadow: '0 0 10px #00FF88, 0 0 20px #00FF88, 0 0 30px #00FF88' },
        },
      },
    },
  },
  plugins: [],
}