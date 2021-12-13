module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lightGold': '#FFD489'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
