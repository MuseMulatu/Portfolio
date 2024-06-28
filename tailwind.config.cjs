module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path as needed
  ],
  theme: {
    extend: {
      rotate: {
        "y-180": "180deg",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
