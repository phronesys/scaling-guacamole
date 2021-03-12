// tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: "media",
    theme: {
        fontSize: {
            'xxs': '.5rem'
        }
        // I tried to use desktop first but I ended using default xD
        // I applied responsiveness only for 1366 (my thinkpad) and 1080p
        // screens: {
        //     '2xl': { 'max': '1535px' },
        //     // => @media (max-width: 1535px) { ... }

        //     'xl': { 'max': '1279px' },
        //     // => @media (max-width: 1279px) { ... }

        //     'lg': { 'max': '1023px' },
        //     // => @media (max-width: 1023px) { ... }

        //     'md': { 'max': '767px' },
        //     // => @media (max-width: 767px) { ... }

        //     'sm': { 'max': '639px' },
        //     // => @media (max-width: 639px) { ... }
        // }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
