module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
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
        primary: '#AD3838',
        gray1: '#332A2A',
        gray2: '#E5E5E5',
      }
    },
  },
  plugins: [],
};
