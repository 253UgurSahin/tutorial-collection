import React from 'react';
import firebase, { auth } from '../../firebase';

export default function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <button onClick={signInWithGoogle}>
            sign in with google
        </button>
    )
}
