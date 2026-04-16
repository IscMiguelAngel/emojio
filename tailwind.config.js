/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f1623',
          card: '#1a2332',
          cardHover: '#232f42',
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}
