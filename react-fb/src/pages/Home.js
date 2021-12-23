import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Logout from '../components/auth/Logout';

export default function Home() {
    const { currentUser } = useAuth();

    return (
        <div className="home">
            <p>Home, Welcome { currentUser.email }</p>
            <Logout />
        </div>
    )
}
