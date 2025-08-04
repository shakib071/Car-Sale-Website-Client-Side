import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import Banner from '../Banner/Banner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import RecentListing from '../RecentListing/RecentListing';
import Test from '../TEST/test';
import Promo from '../Promo/Promo';
import Promo2 from '../Promo/Promo2';

const Home = () => {

    const {loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>;
    }

    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <RecentListing></RecentListing>
            <div className='w-[95%]  mx-auto'>
                <Promo></Promo>
                <Promo2></Promo2>
            </div>
            
        </div>
    );
};

export default Home;