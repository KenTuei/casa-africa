/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this includes all subfolders in src
  ],
  theme: {
    extend: {
      colors: {
        'casa-gold': '#eab308', // Yellow-500 from your code
      }
    },
  },
  plugins: [],
}