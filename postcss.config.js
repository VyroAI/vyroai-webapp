module.exports = {
    plugins: [
        "tailwindcss",
        process.env.NODE_ENV === "production"
            ? [
                "@fullhuman/postcss-purgecss",
                {
                    content: [
                        "./src/components/**/*.{ts,tsx,js,jsx}",
                        "./src/app/**/*.{ts,tsx,js,jsx}",
                    ],
                    defaultExtractor: (content) =>
                        content.match(/[\w-/:]+(?<!:)/g) || [],
                },
            ]
            : undefined,
        "postcss-preset-env",
    ],
};