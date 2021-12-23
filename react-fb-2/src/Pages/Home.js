import React from 'react';
import { useAuth } from '../contexts/AuthContext';

import Logout from '../Components/auth/Logout';

export default function Home() {
    const { currentUser } = useAuth();

    return (
        <div className="flex flex-col">
            <p>Home, Welcome { currentUser.email }</p>
            <Logout />
        </div>
    )
}
