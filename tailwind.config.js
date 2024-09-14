/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern:
        /from-(green|blue|red|yellow|indigo|purple|pink|gray|black|white|teal|cyan|amber|lime|emerald|fuchsia|rose|sky)-[1-9]00/,
    },
    {
      pattern:
        /to-(green|blue|red|yellow|indigo|purple|pink|gray|black|white|teal|cyan|amber|lime|emerald|fuchsia|rose|sky)-[1-9]00/,
    },
    {
      pattern:
        /text-(green|blue|red|yellow|indigo|purple|pink|gray|black|white|teal|cyan|amber|lime|emerald|fuchsia|rose|sky)-[1-9]00/,
    },
  ],

  theme: {
    extend: {
      colors: {
        customGreenTrance: "#4DC59180",
        customGreenTrance12: "#4DC59140",
        customGreen: "#4DC591",
        customBlue: "#9BA1FF",
        customBlueTrance: "#9BA1FF40",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
