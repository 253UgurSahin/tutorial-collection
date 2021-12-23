import Header from '../components/Head';
import Link from 'next/link';

function Next() {
    return (
        <div>
            <Header ptitle="Next" />
            
            <div className='grid grid-col-1 text-2xl w-full text-center'>
                <img className='ml-auto mr-auto' src='/images/logo.png' />
                <span>⚡ Nextron ⚡</span>
            </div>

            <div className='mt-1 w-full flex-wrap flex justify-center'>
                <Link href='/home'>
                    <a className='btn-blue'>Go to home page</a>
                </Link>
            </div>
        </div>
    )
}

export default Next
