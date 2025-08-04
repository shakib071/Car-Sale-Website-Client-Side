import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';

const AvailableCars = () => {
    const {loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>;
    }

    
    return (
        <div>
            <p>Available Cars page</p>
        </div>
    );
};

export default AvailableCars;