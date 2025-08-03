import React from 'react';
import Lottie from "lottie-react";
import errorAnimation from "./404ErrorPage.json";
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='mt-10 flex flex-col justify-center items-center'>
            <div className=''>  
                <Lottie className='h-160' animationData={errorAnimation} loop={true} />
            </div>
           <Link to='/'> <p className='text-2xl btn btn-accent px-6 rounded-xl shadow-2xl text-white'>Back to home</p></Link>
        </div>
    );
};

export default Error;