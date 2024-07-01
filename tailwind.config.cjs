module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path as needed
  ],
  theme: {
    extend: {
      extend: {
        keyframes: {
          bounce: {
            "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
            "40%": { transform: "translateY(-10px)" },
            "60%": { transform: "translateY(-5px)" },
          },
        },
        animation: {
          bounce: "bounce 0.5s",
        },
      },
      rotate: {
        "y-180": "180deg",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
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
