import React from 'react';
import { Link } from 'react-router';


const CarDetails = () => {
    return (
        <div>
            <p className='mt-10 text-4xl font-bold text-center'>Car Details</p>

            <div  className='mt-10 w-[95%] mx-auto bg-gradient-to-r from-[#61d90bb1] to-[#218bb992] rounded-2xl  p-12'>
         
                    <div className=''>
                        <div className='flex flex-col items-center'>
                            <img className='w-190 ' src='https://i.ibb.co.com/RkY8TgGD/667a2432-08b2-4039-9629-e436af619078.webp' alt="car image"/>
                        </div>
                        <div className='text-xl flex flex-col gap-1 pl-4'>
                            <p ><span className='font-semibold'>Model: </span>Audi A8 2024</p>
                            <p ><span className=' font-semibold'>Rent: </span> $160/day</p>
                            
                            <div className='flex items-center gap-2'>
                                <p className=' font-semibold'>Availability:</p>
                                <p className='text-2xl'> Unavailable </p>
                            </div>
                            
                            <p><span className=' font-semibold'>Features: </span>Ac Exjust Ac Cup Holder</p>
                            <p><span className=' font-semibold'>Description: </span> <span className='text-[#000000a9]'>The 2024 Audi A8 is a premium full-size luxury sedan known for its smooth ride and refined cabin. It comes standard with a 3.0L turbocharged V6 engine producing 335 hp, and an optional S8 model with a 563 hp twin-turbo V8. Inside, it offers advanced tech like dual touchscreens, Audi Virtual Cockpit, wireless Apple CarPlay/Android Auto, and exceptional rear legroom. Safety features include emergency braking, blind-spot monitoring, and a surround-view camera. With a starting price around $90,900, the A8 delivers understated elegance, comfort, and high-end performance.</span></p>
                            <Link><p className=' text-2xl font-bold btn rounded-xl mt-4'>Book Now</p></Link>
                        </div>
                        <div>
                    </div>
                                
                    </div>
            </div>
        </div>
    );
};

export default CarDetails;