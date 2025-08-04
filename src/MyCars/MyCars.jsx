import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';

const MyCars = () => {
    const {loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>;
    }

    return (
        <div>
            <p>This is my Cars page</p>
        </div>
    );
};

export default MyCars;