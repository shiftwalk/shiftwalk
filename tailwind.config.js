module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Studio Pro', 'Arial', 'sans-serif'],
      'serif': ['Roslindale', 'Georgia', 'serif'],
      'display': ['Studio Pro', 'Arial', 'sans-serif']
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#242B2D',
        'white': '#FFF',
        'grey': '#ABAEA8',
        'blue': '#242B2D'
      }
    },
  },
  plugins: []
}