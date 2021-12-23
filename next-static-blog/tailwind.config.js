module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
        height: {
          'vh-15': '15vh',
          'vh-20': '20vh',
          'vh-25': '25vh',
          'vh-30': '30vh',
          'vh-35': '35vh',
          'vh-40': '40vh',
          'vh-45': '45vh',
          'vh-50': '50vh',
        },
        container: {
            center: true,
            padding: '2rem'
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
