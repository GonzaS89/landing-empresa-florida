const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        rojofuerte : '#CC2B52',
        azulclaro : '#2f89fc'
      },
      fontFamily: {
        principal : 'Lato',
        secundaria : "Antonio",
        terciaria : 'Open Sans',
        jockey: '"Jockey One", sans-serif;'
      },
      dropShadow: {
        'custom': '2px 2px 10px grey',
      },
      boxShadow: {
        'text': '2px 2px 10px rgba(0, 0, 0, 0.3)', // Personaliza la sombra de texto aquí
      },
    },
  },
  plugins: [flowbite.plugin()],
}

