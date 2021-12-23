import React from 'react';
import { AuthProvider } from '../Contexts/AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './auth/PrivateRoute';
import Home from '../Pages/Home';
import Nav from './Nav';


export default function App() {
    return (
        <>
        <Nav />
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </AuthProvider>
        </Router>
        </>
    )
}


