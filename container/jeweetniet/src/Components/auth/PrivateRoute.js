import React from 'react';
import { Route } from 'react-router-dom';

import { useAuth } from '../../Contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route 
            {...rest}
            render={props => { return currentUser ? <Component {...props} /> : <VierOVier /> }}
        >            
        </Route>
    )
}


function VierOVier() {
    return (
        <div>
            404
        </div>
    )
}