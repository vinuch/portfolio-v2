module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30p': "30%"
      },
      colors: {
        primary: '#AD3838',
        gray1: '#332A2A',
      }
    },
  },
  plugins: [],
};
