import Header from '../components/Head';
import Link from 'next/link';


export default function login() {
    return (
        <>
            <Header ptitle="Login" />

            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    </div>

                    <form className="mt-8 space-y-6" action="#" method="POST">

                        <input type="hidden" name="remember" defaultValue="true" />
                        {/* input fields */}
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only"> Email address </label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="input rounded-t-md" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only"> Password </label>
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="input rounded-b-md" placeholder="Password" />
                            </div>
                        </div>
                        {/* utility */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                            </div>
                        </div>
                        {/* sign In */}
                        <div>
                            <button  type="submit" className="btn btn-indigo w-full flex justify-center text-sm font-medium" >
                                Sign in
                            </button>
                        </div>

                        <div className="my-3 text-xl font-semibold text-gray-300 text-center">
                            or
                        </div>
                        {/* icons */}
                        <div class="grid grid-cols-3 gap-x-2">
                            <span>
                                <Link href="/home">Home</Link>
                            </span>
                            <span class="btn btn-red-hover border-2 border-gray-900 transition">
                                <i class="lni lni-google"></i>
                            </span>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}
