import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import Banner from '../Banner/Banner';

const Home = () => {

    const {loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>;
    }

    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;