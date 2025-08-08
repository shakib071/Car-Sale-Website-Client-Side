import React from 'react';
import { IoCarSport } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { FcCustomerSupport } from "react-icons/fc";


const WhyChooseUs = () => {
    return (
        <div className='mt-15 px-5 md:px-10'>
            <p className='text-center  text-4xl font-bold '>Why Choose Us</p>

            <div className='grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10'>
                <div className=' bg-white px-7 py-7 rounded-2xl shadow-2xl'>
                    <p><IoCarSport className='text-5xl text-[#dd6130]' /></p>
                    <p className='mt-3 text-[#0807079d]'>A diverse selection of cars ranging from affordable models to high-end luxury vehicles.</p>
                </div>  
                  <div className=' bg-white px-7 py-7 rounded-2xl shadow-2xl'>
                    <p><FaHandHoldingDollar className='text-5xl text-[#c630dd]' /></p>
                    <p className='mt-3 text-[#0807079d] '>Affordable daily rates offering great value without compromising quality or service.</p>
                </div>  
                  <div className=' bg-white px-7 py-7 rounded-2xl shadow-2xl'>
                    <p><TbBrandBooking className='text-5xl text-[#30dd33]' /></p>
                    <p className='mt-3 text-[#0807079d]'>Book your ride easily and quickly with a smooth, hassle-free online booking process.</p>
                </div> 
                 <div className=' bg-white px-7 py-7 rounded-2xl shadow-2xl'>
                    <p><FcCustomerSupport className='text-5xl text-[#30dd5b]' /></p>
                    <p className='mt-3 text-[#0807079d]'>Round-the-clock customer support ready to assist you anytime with any questions or issues.</p>
                </div> 
            </div>
        </div>
    );
};

export default WhyChooseUs;