module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{jsx,js,te,tsx}",
    
  ],
  theme: {
    
    extend: {
      backgroundImage:{
        'background-image-1': 'url(./src/assets/images/Mask Group 1.png)',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
