/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'body': '#080909',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'example': '#1a58c4'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
}
