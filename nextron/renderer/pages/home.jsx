import Header from '../components/Head';
import Link from 'next/link';

function Home() {
    return (
        <div>
            <Header ptitle="Home" />

            <div className='grid grid-col-1 text-2xl w-full text-center'>
                <img className='ml-auto mr-auto' src='/images/logo.png' />
                <span>⚡ Electron ⚡</span>
                <span>+</span>
                <span>Next.js</span>
                <span>+</span>
                <span>tailwindcss</span>
                <span>=</span>
                <span>💕 ⚡</span>
            </div>

            <div className='mt-1 w-full flex-wrap flex justify-center'>
                <Link href='/next'>
                    <a className='btn btn-blue'>Go to next page</a>
                </Link>
                <Link href='/login'>
                    <a className='btn btn-blue'>Go to Login page</a>
                </Link>
            </div>
        </div>
    );
}

export default Home;
