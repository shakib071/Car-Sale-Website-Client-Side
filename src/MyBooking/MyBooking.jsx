import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';

const MyBooking = () => {
    const {loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>;
    }
    return (
        <div>
            <p>My Booking page</p>
        </div>
    );
};

export default MyBooking;