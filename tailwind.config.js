module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{jsx,js,te,tsx}",
    
  ],
  theme: {
    screens: {
      'sm': '374px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      backgroundImage: {
        'bar':'url("./Assets/Picture/Group 3039.png")',
        'background': 'url("./Assets/Picture/Mask Group 1.png")',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
