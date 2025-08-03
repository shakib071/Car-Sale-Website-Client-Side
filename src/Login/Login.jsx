import React, { use } from 'react';
import Lottie from "lottie-react";
import loginAnimation from "./Login.json";
import googleLogo from '../assets/google.png'
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {

    const {login,setLoading,handleGoogleLogin} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignin = () => {
            
        handleGoogleLogin()
        .then(()=>{
            navigate(`${location.state ? location.state : '/'}`);
        })
        .catch((error)=>{
            setLoading(false);
            console.log(error);
            toast.error("Account Validation Failed");
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        login(email,password)
        .then(()=>{
            navigate(`${location.state ? location.state : '/'}`);
        })
        .catch((error)=> {
            setLoading(false);
            console.log(error);
            toast.error("Account Validation Failed");
        })

    }
    
    return (
        <div className='mt-10 flex justify-center items-center'>
            
            <div>
                <Lottie className='w-100' animationData={loginAnimation} loop={true} />
            </div>

            <div className='bg-green-400 p-11 rounded-2xl shadow-2xl'>
                <p className='text-center text-3xl text-white font-semibold'>Login Your Account</p>
                
                <form onSubmit={handleLogin} className='' >
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Email</label>
                        <input className='input w-[300px] input-accent' name='email' placeholder='Email' type="email" />
                    </div> 
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Password</label>
                        <input className='input w-[300px] input-accent' name='password' placeholder='Password' type="password" />
                    </div>
                    <div onClick={handleGoogleSignin} className='flex justify-center cursor-pointer items-center mt-4 bg-amber-500 py-2 rounded-4xl'>
                        <p className=''><img className='w-15' src={googleLogo} alt="google" /></p>
                        <p className='text-lg font-semibold'>Sign in with Google</p>
                    </div>
                    <div className='mt-4 flex justify-center'>
                        <button type='submit' className='bg-sky-500 cursor-pointer w-full py-2 rounded-lg text-xl text-white font-semibold'>Login</button>
                    </div>
                    <div className='mt-3'>
                        <p className='text-white font-semibold text-lg '>Dont have an account? <Link to='/register'><span className='border-b-1 border-b-amber-500 text-[#2e0ae2d1] ml-2'>Register</span></Link></p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;