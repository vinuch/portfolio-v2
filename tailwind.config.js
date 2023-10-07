module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '30p': "30%",
        '30rem': "30rem",
        '10rem': "10rem",
        '70vh': "70vh",
        '50vh': "50vh",
      },
      fontSize: {
        '5rem': '5rem',
        '4rem': '4rem',
      },
      colors: {
        dark1: '#121212',
        primary: '#AD3838',
        primary2: '#44312f',
        gray1: '#332A2A',
        gray2: '#E5E5E5',
      }
    },
  },
  plugins: [],
};
