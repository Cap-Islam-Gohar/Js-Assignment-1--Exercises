/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./js/*.js",
      "./public/questions/*/*.html",
      "./public/questions/*/*.js",
    ],
    theme: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
    ],
}