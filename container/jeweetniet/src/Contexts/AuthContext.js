import React, { useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // const unsubscribe = auth.onAuthStateChanged(user => {
        //     setCurrentUser(user);
            setLoading(false);
        // });

        // return unsubscribe;
    }, []);

    function logout() {

    }
    function register(email, password) {
        
    }
    function login(email, password) {
        
    }

    const value = {
        currentUser,
        logout,
        register,
        login
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
