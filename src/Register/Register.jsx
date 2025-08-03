import React, { use, useState } from 'react';
import googleLogo from '../assets/google.png';
import { Link, useLocation, useNavigate } from 'react-router';
import Lottie from "lottie-react";
import registerAnimation from './register.json';
import { AuthContext } from '../AuthProvider/AuthContext';
import { toast } from 'react-toastify';


const Register = () => {
    
    const [error,setError] = useState('');
    const {createUser,updateUserData,setUser,setLoading,handleGoogleLogin} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo);

        if(password.length < 6){
            setError('Password must be 6 charecter long');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setError('Must have a Uppercase letter');
            return;
        }  
        else if(!/[a-z]/.test(password)){
            setError('Must have a Lowercase letter');
            return;
        }


        createUser(email,password)
          .then((result)=> {
            const user = result.user;

            updateUserData({displayName : name, photoURL : photo})
            .then(()=>{
                setUser({...user,displayName : name, photoURL : photo});


                navigate(`${location.state ? location.state : '/'}`);
                
            })
            .catch((error)=> {
                console.log(error);
                setUser(user);
                setLoading(false);
            });
            
          })
          .catch((error)=>{
            console.log(error);
            toast.error('Registration Failed');
            setLoading(false);
          });
        
    }

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

    return (
        <div className=' flex justify-center items-center mt-7'>
            
            <div>
                <Lottie className='w-100' animationData={registerAnimation} loop={true} />
            </div>

            <div className='bg-green-400 px-15 py-11 rounded-2xl shadow-2xl font-semibold'>
                <p className='text-center text-3xl text-white'>Register Your Account</p>
                <form onSubmit={handleRegister} className='' >
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
                        <input className='input w-[300px] input-accent' name='photo' placeholder='Photo URL' type="text" />
                    </div>
                    <div onClick={handleGoogleSignin} className='flex justify-center cursor-pointer items-center mt-4 bg-amber-500 py-2 rounded-4xl'>
                        <p className=''><img className='w-15' src={googleLogo} alt="google" /></p>
                        <p className='text-lg font-semibold'>Sign in with Google</p>
                    </div>
                    <div className='mt-4 flex justify-center'>
                        <button type='submit' className='bg-sky-500  cursor-pointer w-full py-2 rounded-lg text-xl text-white font-semibold'>Register</button>
                    </div>
                    {error && <p className='mt-2 text-[13px] text-center text-red-400'>{error}</p>}
                    <div className='mt-3'>
                        <p className='text-white font-semibold text-lg '>Already Have an Account? <Link to='/login'><span className='border-b-1 border-b-amber-500 text-[#2e0ae2d1] ml-2'>Signin</span></Link></p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;