/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-gradient":
          "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.85) 100%)",
      },
      colors: {
        heroButtonBlue: "#3a57e8",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
