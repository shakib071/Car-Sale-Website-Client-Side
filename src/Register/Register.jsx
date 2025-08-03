import React from 'react';
import googleLogo from '../assets/google.png';
import { Link } from 'react-router';
import Lottie from "lottie-react";
import registerAnimation from './register.json'

const Register = () => {
    return (
        <div className=' flex justify-center items-center mt-7'>
            
            <div>
                <Lottie className='w-100' animationData={registerAnimation} loop={true} />
            </div>

            <div className='bg-green-400 px-15 py-11 rounded-2xl shadow-2xl font-semibold'>
                <p className='text-center text-3xl text-white'>Register Your Account</p>
                <form className='' >
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Name</label>
                        <input className='input w-[300px] input-accent' name='name' placeholder='Your Name' type="text" />
                    </div>  
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Email</label>
                        <input className='input w-[300px] input-accent' name='email' placeholder='Email' type="email" />
                    </div> 
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Password</label>
                        <input className='input w-[300px] input-accent' name='password' placeholder='Password' type="password" />
                    </div> 
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Photo URL</label>
                        <input className='input w-[300px] input-accent' name='password' placeholder='Password' type="password" />
                    </div>
                    <div className='flex justify-center cursor-pointer items-center mt-4 bg-amber-500 py-2 rounded-4xl'>
                        <p className=''><img className='w-15' src={googleLogo} alt="google" /></p>
                        <p className='text-lg font-semibold'>Sign in with Google</p>
                    </div>
                    <div className='mt-4 flex justify-center'>
                        <button type='submit' className='bg-sky-500  cursor-pointer w-full py-2 rounded-lg text-xl text-white font-semibold'>Register</button>
                    </div>
                    <div className='mt-3'>
                        <p className='text-white font-semibold text-lg '>Already Have an Account? <Link to='/register'><span className='border-b-1 border-b-amber-500 text-[#2e0ae2d1] ml-2'>Signin</span></Link></p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;