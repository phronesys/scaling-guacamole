// tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: "media",
    theme: {
        extend: {
            fontSize: {
                'xxs': '.5rem'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
