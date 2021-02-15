module.exports = {
  purge: [
    './src/**/*.ejs',
    './src/**/*.scss',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
}
