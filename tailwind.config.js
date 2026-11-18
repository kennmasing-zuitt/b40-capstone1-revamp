// Builds index.css from the Tailwind classes used in index.html.
// Rebuild after changing classes: npx -y tailwindcss@3.4.19 -i tailwind.input.css -o index.css --minify
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        baseblue: '#30506e',
        basebluedark: '#223a50',
        rightsblue: '#72a1b4',
        rightsbluedark: '#3d6d80',
        rightsbluelight: '#e8f1f5',
        bodytext: '#43454a',
        subtlebg: '#f8fafc',
        bordercolor: '#e2e8f0',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        saira: ['"Saira Extra Condensed"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
