/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure it scans your React components
  ],
  darkMode: 'class', // optional, if you want class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}
