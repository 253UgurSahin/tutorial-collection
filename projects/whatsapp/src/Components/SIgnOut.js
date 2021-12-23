import React from 'react';
import { auth } from '../firebase';

export default function SIgnOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>
            Sign Out
        </button>
    )
}
