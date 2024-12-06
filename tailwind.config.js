// tailwind.config.js

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
    "./public/index.html",        // Include HTML files if necessary
  ],
  theme: {
    extend: {
      keyframes: {
          "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        colors: {
          filter: {
         "blur-20": "blur(20px)",
         "blur-25": "blur(25px)",
          },
        },
      animation: {
        "pop-blob": "pop-blob 5s infinite",
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
