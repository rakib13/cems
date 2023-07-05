/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './storage/freamework/view/*.php',
     './resources/view/**/*.blade.php',
     './resources/js/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

