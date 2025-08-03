import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading'

const PrivateRouter = ({children}) => {
    const {loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>;
    }
    const {user} = use(AuthContext);

    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;