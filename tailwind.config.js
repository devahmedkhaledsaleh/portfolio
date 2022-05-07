module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
      keyframes: {
        textMove: {
          "0%": {
            marginTop: "0",
          },
          "25%": {
            marginTop: "-70px",
          },
          "50%": {
            marginTop: "-140px",
          },
          "100%": {
            marginTop: "0",
          },
        },
        headingMove: {
          "0%": {
            transform: "translateX(-1px)",
          },
          
          "50%": {
            transform: "translateX(100px)",
          },
          "100%": {
            transform: "translateX(-1px)",
          },
        },
        
      },
    },
  },
  plugins: [],
};
