/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-lg': 'inset 0 8px 15px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

