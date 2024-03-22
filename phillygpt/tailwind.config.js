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
        'navbar-lm' : '#e5d0b1',
        'lm_nav': '#d7c1a5',
        'lm_body' : '#ece1d0',
        'suggestionbox' : '#e5d0b1',
        'responsebg' : '#f1dec2', 
        'responsecodebox' : '#e5d0b1',
        'suggestionborder' : '#E6C297',
      },
      fontWeight:{
        'extrabold' : 800,
        'lightbold' : 500,
      }
    },
  },
  plugins: [],
  darkMode: true,
}

