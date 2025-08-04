import React from 'react';
import bannerImg from '../assets/bannerCarImage.png'
import { Link } from 'react-router';

const Banner = () => {
    return (

        <div
            style={{ backgroundImage: `url(${bannerImg})` }}
            className='bg-cover bg-no-repeat bg-center bg-white w-full h-120 py-7 px-10 flex items-center justify-center'
            >
            <div className='flex flex-col items-center'>
                <div>
                <p style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }} className='text-7xl text-[#13f807] text-shadow- font-bold'>Drive Your Dreams Today!</p>
                </div>
                <div className='mt-10'>
                <Link to='available-cars'>
                    <button className='bg-[#05b4f4a0] text-white px-10 py-3 text-2xl font-semibold rounded-xl'>
                    View Available Cars
                    </button>
                </Link>
                </div>
            </div>
        </div>

    );
};

export default Banner;