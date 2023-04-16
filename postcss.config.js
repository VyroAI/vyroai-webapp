module.exports = {
  plugins: [
    "tailwindcss",
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              // using ./src/ dir
              "./src/**/*.{js,ts,jsx,tsx}",
              // using ./ dir
              "./app/**/*.{js,ts,jsx,tsx}",
              "./components/**/*.{js,ts,jsx,tsx}",
              // add the path to ReactToastify.css
              "./node_modules/react-toastify/dist/ReactToastify.css",
              // add more paths here
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    "postcss-preset-env",
  ],
};
