import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();
    
    const history = useHistory();

    async function handleFormSubmit(e) {
        e.preventDefault();        

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) { return setError('Passwords do not match!'); }

        try {
            setLoading(true);
            setError('');
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch (e) {
            setError('Something went wrong!')
        }

        setLoading(false);
    }

    return (
        <div className="w-full max-w-sm m-5 p-5">
            <h2 className="w-full text-2xl font-bold mb-2">Sign Up</h2>
            
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
                </div>
                <div className="flex flex-col">
                    <label>Password confirmation</label>
                    <input className="rounded border border-gray-700 px-3 py-1 focus:border-2 outline-none" type="password"placeholder="Password Repeat" ref={passwordConfirmationRef} required />
                </div>

                <button disabled={loading} type="submit" className="bg-blue-600 rounded py-2 text-white">Sign Up</button>
            </form>
            
            <div className="flex flex-wrap justify-between px-1">
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}
