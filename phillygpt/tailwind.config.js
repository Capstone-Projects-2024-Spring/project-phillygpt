/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'gray-navbar' : '#545454',
        'darkgray' : '#333333',
      }
    },
  },
  plugins: [],
  darkMode: true,
}

