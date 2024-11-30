/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cred-black': '#0f0f0f',
        'cred-dark': '#1c1c1c',
        'cred-gray': '#2c2c2c',
        'cred-light': '#f0f0f0',
        'cred-accent': '#d5a13c',
        'cred-blue': '#3b82f6',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

