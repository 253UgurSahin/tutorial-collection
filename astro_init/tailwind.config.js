module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'
    ],
    darkMode: false,
    theme: {
        extend: {            
            container: {
                padding: '2rem',
                center: true,
            }
        },
    },
    variants: {
        extend: {
        },
    },
    plugins: [],
}