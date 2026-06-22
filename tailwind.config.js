/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B4FDF',
        secondary: '#F3F4F6',
      },
    },
  },
  plugins: [],
}

