import React, {use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading'

const PrivateRouter = ({children}) => {
    const {loading,user} = use(AuthContext);
    const location = useLocation();
    // console.log(user);
    

    if(loading){
        return <Loading></Loading>;
    }

    
    
    if(user && user?.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;