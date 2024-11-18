/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ["Sora", "sans-serif"]
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'cloud': 'cloud 3s ease-in-out infinite'
      },
      keyframes: {
        cloud: {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translatex(0)' },
        },
    },
  },
},
  plugins: [],
  darkMode: 'class',
}

