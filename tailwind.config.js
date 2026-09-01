/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          darkNavy: '#001D39',
          deepBlue: '#0A4174',
          steelBlue: '#49769F',
          oceanTeal: '#4E8EA2',
          slateCyan: '#6EA2B3',
          skyCyan: '#7BBDE8',
          iceBlue: '#BDD8E9',
        }
      }
    },
  },
  plugins: [],
}