import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';

const AddCar = () => {
    const {loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>;
    }
    return (
        <div>
            <p>Add car page</p>
        </div>
    );
};

export default AddCar;
