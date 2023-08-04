/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {

        // Fill colors
        'primary': '#2E53A3',
        'background': '#ffffff',
        'background-blue': '#001853',
        'blue-shadow': '#709DDA',

        // Text Colors
        'black': '#0F0F0F',
        'grey': '#2C2C2C',
        'lighy-gray': '#606060',

      },

      fontFamily: {
        'sans': [ 'Inter', 'system-ui', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}
