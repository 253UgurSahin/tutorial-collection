import React from 'react';
import Head from 'next/head';

export default function Heads({ title, desc, keys, author }) {
    return (
        <Head>
            <title>{ title && title + ' | ' } Next App </title>
            <meta charset="UTF-8" />
            <meta name="description" content={ desc ? desc : 'Dit is een test website'} />
            <meta name="keywords" content={ keys ? keys : 'HTML, CSS, JavaScript'} />
            <meta name="author" content={ author ? author : 'Ugur Sahin' } />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
