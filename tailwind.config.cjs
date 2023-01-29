/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        enlarge: {
          '100%': {"flex-basis": "90%"}
        }
      },
      animation: {
        enlarge: "enlarge 1s ease-in-out 1 normal forwards"
      }
    },
    container: {
      center: true,
    },
    fontFamily: {
      'display': ['Oswald', 'sans-serif'],
      'text': ['Lato', 'sans-serif'],
    }
  },
  plugins: [],
}
