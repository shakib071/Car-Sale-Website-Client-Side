import React from 'react';
import SaleAnimation from './Saletags.json';
import Lottie from "lottie-react";

const Promo2 = () => {
    return (
        <div className='mt-10 bg-[#15e4de] p-10 rounded-2xl'>
            <div className='flex flex-col items-center'>
              
                <div>
                    <Lottie className='w-80 sm:w-110 md:w-150 lg:w-160' animationData={SaleAnimation} loop={true} />
                </div>
                
                <h2 className='text-2xl sm:text-3xl lg:text-4xl text-[#f60909fa] text-center font-semibold'>🏖️ SUMMER ADVENTURE SALE</h2>
                <p className='text-lg sm:text-xl lg:text-2xl font-semibold'>2.3% APR Financing on All SUVs</p>
            </div>
        </div>
    );
};

export default Promo2;