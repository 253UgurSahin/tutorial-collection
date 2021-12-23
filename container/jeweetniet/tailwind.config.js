module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                'v-15': '15vh',
                'v-20': '20vh',
                'v-25': '25vh',
                'v-30': '30vh',
                'v-35': '35vh',
                'v-40': '40vh',
                'v-45': '45vh',
                'v-50': '50vh',
                'v-55': '55vh',
                'v-60': '50vh',
                'v-65': '65vh',
            },
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        container: false
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    '@screen sm':{
                        maxWidth: '578px'
                    },
                    '@screen md':{
                        maxWidth: '640px'
                    },
                    '@screen lg':{
                        maxWidth: '768px'
                    },
                    '@screen xl':{
                        maxWidth: '1024px'
                    },
                    '@screen 2xl':{
                        maxWidth: '1280px'
                    },
                }
            })
        },
    ],
}
