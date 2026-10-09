/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F8FAFC",
        "corporate-navy": "#0B132B",
        "accent-gold": "#d49933",
        "premium-gold": "#F4C542",
      },
      fontFamily: {
        sans: ['Calibri', 'Candara', 'Segoe', '"Segoe UI"', 'Optima', 'Arial', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
