import React, { use, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { Link } from 'react-router';

const AvailableCars = () => {
    const {loading} = use(AuthContext);
    const [isgrid, setGrid] = useState(true);
    if(loading){
        return <Loading></Loading>;
    }
    
    const iter = [1,2,3,4,5,6,7,8,9,10];

    const handleGridListView = () => {
        setGrid(!isgrid);
    }
    
    return (
        <div>
            <p className='mt-10 text-4xl font-bold text-center'>Available Cars</p>

            <div onClick={handleGridListView} className='w-[92%]  mt-10 mx-auto'>
                {
                    isgrid ? (
                        <div className='flex cursor-pointer items-center gap-3'>
                            <p><FaListUl className='text-2xl text-[#ff6200] shadow-2xl' /></p>
                            <p className='text-2xl font-semibold'>List View</p>
                        </div>
                    ) : (
                        <div className='flex cursor-pointer items-center gap-3'>
                            <p><IoGrid className='text-2xl  text-[#df0d0d]' /></p>
                            <p className='text-2xl font-semibold'>Grid View</p>
                        </div>
                    )
            
                }
               
               
            </div>
            {
                isgrid && (
                    <div className='mt-10 grid grid-cols-2 gap-7 px-5'>
                    {
                        iter.map(it => (
                            <div key={it} className='transition-transform duration-300 transform hover:scale-105  shadow-[0_4px_20px_rgba(36,227,97,0.4)] hover:shadow-[0_4px_30px_rgba(210,173,73,0.8)]  bg-gradient-to-r from-[#61d90bb1] to-[#218bb992] rounded-2xl  p-10'>
                        
                                <div>
                                    <div>
                                        <img className='w-100 ' src='https://i.ibb.co.com/RkY8TgGD/667a2432-08b2-4039-9629-e436af619078.webp' alt="car image" />
                                    </div>
                                    <div className='text-xl flex flex-col gap-1 pl-4'>
                                        <p ><span className='font-semibold'>Model: </span>Audi A8 2024</p>
                                        <p ><span className=' font-semibold'>Rent: </span> $160/day</p>
                                        <div className='flex items-center gap-2'>
                                            <p className=' font-semibold'>Availability:</p>
                                            <p className='text-2xl'> Unavailable </p>
                                        </div>
                                        
                                        <p><span className=' font-semibold'>Bookings: </span>14</p>
                                        <p><span className=' font-semibold'>Date Posted: </span> 2025-08-02</p>
                                        <Link to='car-details'><p className=' text-2xl font-bold btn rounded-xl mt-4'>Book Now</p></Link>
                                    </div>
                                </div>
                        
                        
                        </div>
                        ))
                    }
                    </div>
                )
            }
            
            {
                !isgrid && (
                <div className='mt-10 grid gap-7 px-5'>
                    {
                        iter.map(it => (

                            <div key={it} className=' transition-transform duration-300 transform hover:scale-103  shadow-[0_4px_20px_rgba(36,227,97,0.4)] hover:shadow-[0_4px_30px_rgba(210,173,73,0.8)]  bg-gradient-to-r from-[#61d90bb1] to-[#218bb992] rounded-2xl  p-8'>

                            
                                <div className='flex justify-center items-center  gap-20'>
                                <div>
                                    <img className='w-100 ' src='https://i.ibb.co.com/RkY8TgGD/667a2432-08b2-4039-9629-e436af619078.webp' alt="car image"/>
                                </div>
                                <div className='text-xl flex flex-col gap-1 pl-4'>
                                    <p ><span className='font-semibold'>Model: </span>Audi A8 2024</p>
                                    <p ><span className=' font-semibold'>Rent: </span> $160/day</p>
                                    
                                    <div className='flex items-center gap-2'>
                                        <p className=' font-semibold'>Availability:</p>
                                        <p className='text-2xl'> Unavailable </p>
                                    </div>
                                    
                                    <p><span className=' font-semibold'>Bookings: </span>14</p>
                                    <p><span className=' font-semibold'>Date Posted: </span> 2025-08-02</p>
                                    <Link to='car-details'><p className=' text-2xl font-bold btn rounded-xl mt-4'>Book Now</p></Link>
                                </div>
                                <div>
                            </div>
                                
                                </div>
                            </div>

                        ))
                    }
                </div>
                )
            }
            
            
        </div>
    );
};

export default AvailableCars;