import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route 
            {...rest}
            render={
                props => { return currentUser ? <Component {...props} /> : <div>404</div>
            }
        >            
        </Route>
    )
}
