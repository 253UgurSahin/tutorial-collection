import Head from 'next/head';

export default function Header(props) {
    return (        
        <Head>
            {/* global meta */}
            <title>{props.ptitle}</title>

            { props.title && <meta property="og:title" content={props.title} key="title" /> }

            { props.desc && <meta property="og:description" content={props.desc} key="description" /> }

            {/* stylesheets */}
            <link rel="preconnect" href="https://cdn.lineicons.com/3.0/lineicons.css" crossorigin />
            <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet" />

            {/* scoped data */}
            { props.children && props.children }
        </Head>
    )
}
