import Heads from '../components/Head';
import Header from '../components/Header';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Heads />
            <Header />
            <main className="container">
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp
