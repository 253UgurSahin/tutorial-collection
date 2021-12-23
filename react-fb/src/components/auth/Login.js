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
        <div className="container flex flex-col item-center mt-10">
            <form onSubmit={handleFormSubmit} className="form flex flex-col item-center">
                {
                    error && <p className="error-message">{error}</p>
                }

                <h2 className="h2 mx-10 t-pink">Log In</h2>

                <div className="cont__input">
                    <label>Email</label>
                    <input className="input" type="email" placeholder="Email" ref={emailRef} required />
                </div>
                <div className="cont__input">
                    <label>Password</label>
                    <input className="input" type="password"placeholder="Password" ref={passwordRef} required />
                    {/* <p>Forgot password?</p> */}
                </div>

                <button disabled={loading} type="submit" className="btn__auth">Log In</button>
            </form>
            
            <div className="flex flex-row">
                <p>Don't have an account?</p>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}
