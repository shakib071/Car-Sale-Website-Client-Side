import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import Banner from '../Banner/Banner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import RecentListing from '../RecentListing/RecentListing';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import Promo from '../Promo/Promo';
import Promo2 from '../Promo/Promo2';
import Test from '../Test/Test'

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
            <SpecialOffer></SpecialOffer>
            
            
        </div>
    );
};

export default Home;