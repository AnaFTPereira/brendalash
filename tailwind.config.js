/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b95fa6",
        accent: "#f7e9f2",
        dark: "#111827",
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};


