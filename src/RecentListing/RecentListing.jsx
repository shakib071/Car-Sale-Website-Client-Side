import React, { useEffect, useState } from 'react';
import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";

const RecentListing = () => {

    const [listData,setListData] = useState([]);

    useEffect(()=> {
        fetch('./recentListing.json')
        .then(res => res.json())
        .then(data => setListData(data))
    },[]);

    return (
        <div className='mt-15'>
            <p className='text-4xl text-center font-bold'>Recent Listing</p>

            <div className='mt-13 grid grid-cols-1 md:grid-cols-2 gap-7 px-5'>

            {
                listData.map(list => (
                    <div key={list.id} className='transition-transform duration-300 transform hover:scale-105  shadow-[0_4px_20px_rgba(36,227,97,0.4)] hover:shadow-[0_4px_30px_rgba(210,173,73,0.8)]  bg-gradient-to-r from-[#2df0ac] to-[#218bb992] rounded-2xl p-5  md:p-10'>

                        <div>
                            <div>
                                <img className='w-100 ' src={list.car_image} alt="car image" />
                            </div>
                            <div className='text-xl flex flex-col gap-1 pl-4'>
                                <p ><span className='font-semibold'>Model: </span>{list.model}</p>
                                <p ><span className=' font-semibold'>Rent: </span> {list.daily_price}</p>
                                <div className='flex items-center gap-2'>
                                    <p className=' font-semibold'>Availability:</p>
                                    <p className='text-2xl'> {list.availability=="Available" ? <TiTick className='text-[#e5ed05]' /> : <RxCrossCircled className='text-red-700'/>} </p>
                                </div>
                                
                                <p><span className=' font-semibold'>Bookings: </span>{list.booking_count}</p>
                                <p><span className=' font-semibold'>Date Posted: </span> {list.date_posted}</p>
                            </div>
                        </div>

                    </div>
                ))
            }

            </div>

            
        </div>
    );
};

export default RecentListing;