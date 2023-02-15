/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-main':
          'linear-gradient(90deg, rgba(1, 22, 23, 1) 0%, rgba(2, 39, 41, 1) 50%, rgba(1, 22, 23, 1) 100%);',
      },
    },
  },
  plugins: [],
};
