const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        rojofuerte : '#fc4311'
      },
      fontFamily: {
        principal : 'Poppins'
      }
    },
  },
  plugins: [flowbite.plugin()],
}

