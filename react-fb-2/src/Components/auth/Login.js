import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();

    const history = useHistory();

    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            setError('');
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch (e) {
            setError('Something went wrong!')
        }

        setLoading(false);
    }

    return (
        <div className="w-full max-w-sm m-5 p-5">
            <h2 className="w-full text-2xl font-bold mb-2">Log In</h2>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                {
                    error && <p className="text-red-500">{error}</p>
                }

                <div className="flex flex-col">
                    <label>Email</label>
                    <input className="rounded border border-gray-700 px-3 py-1 focus:border-2 outline-none" type="email" placeholder="Email" ref={emailRef} required />
                </div>
                <div className="flex flex-col">
                    <label>Password</label>
                    <input className="rounded border border-gray-700 px-3 py-1 focus:border-2 outline-none" type="password"placeholder="Password" ref={passwordRef} required />
                    <p>Forgot password?</p>
                </div>

                <button disabled={loading} type="submit" className="bg-blue-600 rounded py-2 text-white">Log In</button>
            </form>
            
            <div className="flex flex-wrap justify-between px-1">
                <p>Don't have an account?</p>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}
