/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ttnorms: ['var(--font-tt-norms)'],
        montserrat: ['var(--font-montserrat)'],
      },
      container: {
        center: true,
      },

      colors: {
        accent: '#FF8F9C',
        blackish: '#1b1b1b',
        primary: 'rgba(26, 70, 76, 1)',
        'nere-black': 'rgba(62, 62, 62, 1)',
        'nere-orange': 'rgba(245, 137, 41, 1)',
        'nere-green': 'rgba(4, 72, 77, 1)',
        'nere-grey': '#757373',
      },
    },
  },
  plugins: [],
};
