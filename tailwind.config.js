const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        rojofuerte : '#CC2B52'
      },
      fontFamily: {
        principal : 'Lato',
        secundaria : "Antonio",
        terciaria : 'Open Sans'
      },
      dropShadow: {
        'custom': '2px 2px 10px grey',
      },
    },
  },
  plugins: [flowbite.plugin()],
}

