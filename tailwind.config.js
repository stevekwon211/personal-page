module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    plugins: [],
    theme: {
        extend: {
            colors: {
                "custom-gray": "#B1B5AD",
            },
            transitionDuration: {
                500: "500ms",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
