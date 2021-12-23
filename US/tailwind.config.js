module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'
    ],
    theme: {
        extend: {
            height: {
                'vh-50': '50vh',
                'vh-65': '65vh',
                'vh-75': '75vh'
            },
            translate: {
				200: '200%',
			},
            textColor: {
                'honeyyellow': '#EDFFEC',
                'lightgreen': '#61E786',
                'lightgray': '#5A5766',
                'darkgray': '#48435C',
                'purple': '#9792E3',
            },
            backgroundColor: {
                'honeyyellow': '#EDFFEC',
                'lightgreen': '#61E786',
                'lightgray': '#5A5766',
                'darkgray': '#48435C',
                'purple': '#9792E3',
            },
            borderColor: {
                'honeyyellow': '#EDFFEC',
                'lightgreen': '#61E786',
                'lightgray': '#5A5766',
                'darkgray': '#48435C',
                'purple': '#9792E3',
            },
            container: {
                center: true,
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: '#48435C',
                    },
                },
            }
        },
    },
    variants: {
        extend: {
            rotate: ['active', 'hover', 'group-hover'],
            scale: ['active', 'hover', 'group-hover'],
            opacity: ['active', 'hover', 'group-hover'],
            roborderRadius: ['hover'],
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};