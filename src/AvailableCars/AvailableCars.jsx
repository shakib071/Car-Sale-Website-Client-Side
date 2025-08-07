import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { Link, useLoaderData } from 'react-router';

const AvailableCars = () => {
    const {loading} = use(AuthContext);
    const [allCars,setAllCars] = useState([]);
    const [isgrid, setGrid] = useState(true);
    const carsData = useLoaderData();

    useEffect(()=> {
        setAllCars(carsData);
    },[]);

    console.log(allCars);
   
    

    const handleGridListView = () => {
        setGrid(!isgrid);
    }

    const handleSortCar = async(sortQuery) => {
        
        console.log(sortQuery);

        const response = await fetch(`https://car-sale-web-server.vercel.app/allCars?sort=${sortQuery}`);
        const data = await response.json();
        setAllCars(data);
    
    }

    if(loading){
        return <Loading></Loading>;
    }
    
    return (
        <div>
            <p className='mt-10 text-4xl font-bold text-center'>Available Cars</p>
            
            <div className='flex justify-center gap-10 items-center w-[92%]  mt-10 mx-auto'>
                <div onClick={handleGridListView} className=''>
                    {
                        isgrid ? (
                            <div className='flex bg-white px-5 py-2 rounded-lg cursor-pointer items-center gap-3'>
                                <p><FaListUl className='text-2xl text-[#ff6200] shadow-2xl' /></p>
                                <p className='text-2xl font-semibold'>List View</p>
                            </div>
                        ) : (
                            <div className='flex bg-white px-5 py-2 rounded-lg cursor-pointer items-center gap-3'>
                                <p><IoGrid className='text-2xl  text-[#df0d0d]' /></p>
                                <p className='text-2xl font-semibold'>Grid View</p>
                            </div>
                        )
                
                    }

                </div>

                <div className='  '>
                    <details className="dropdown ">
                        <summary className="btn m-1 px-5 py-2 text-2xl font-semibold rounded-lg">Sort Cars</summary>
                        <ul className="menu dropdown-content text-xl bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={()=> handleSortCar('date-asc')}><a>Sort By Date Asc</a></li>
                            <li onClick={()=> handleSortCar('date-des')}><a>Sort By Date Des</a></li>
                            <li onClick={()=> handleSortCar('price-asc')}><a>Sort By Price Asc</a></li>
                            <li onClick={()=> handleSortCar('price-des')}><a>Sort By Price Des</a></li>
                        </ul>
                    </details>
                </div>
           </div>
            {
                isgrid && (
                    <div className='mt-10 grid grid-cols-2 gap-7 px-5'>
                    {
                        allCars.map(car => (
                            <div key={car._id} className='transition-transform duration-300 transform hover:scale-105  shadow-[0_4px_20px_rgba(36,227,97,0.4)] hover:shadow-[0_4px_30px_rgba(210,173,73,0.8)]  bg-gradient-to-r from-[#61d90bb1] to-[#218bb992] rounded-2xl  p-10'>
                                
                                <div>
                                    <div>
                                        <img className='w-160 h-80 ' src={car.carDetails.image} alt="car image" />
                                    </div>
                                    <div className='text-xl flex flex-col gap-1 pl-4'>
                                        <p ><span className='font-semibold'>Model: </span>{car.carDetails.carModel}</p>
                                        <p ><span className=' font-semibold'>Rent: </span> ${car.carDetails.dailyRentalPrice}/day</p>
                                        <div className='flex items-center gap-2'>
                                            <p className=' font-semibold'>Availability:</p>
                                            <p className='text-2xl'> {car.carDetails.available} </p>
                                        </div>
                                        
                                        <p><span className=' font-semibold'>Bookings: </span>{car.carDetails.bookingCount}</p>
                                        <p><span className=' font-semibold'>Date Posted: </span> {car.carDetails.addedDate}</p>
                                        <Link to={`car-details/${car._id}`}><p className=' text-2xl font-bold btn rounded-xl mt-4'>Book Now</p></Link>
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
                        allCars.map(car => (

                            <div key={car._id} className=' transition-transform duration-300 transform hover:scale-103  shadow-[0_4px_20px_rgba(36,227,97,0.4)] hover:shadow-[0_4px_30px_rgba(210,173,73,0.8)]  bg-gradient-to-r from-[#61d90bb1] to-[#218bb992] rounded-2xl  p-8'>

                            
                                <div className='flex justify-center items-center  gap-20'>
                                <div>
                                    <img className='w-100 ' src={car.carDetails.image} alt="car image"/>
                                </div>
                                <div className='text-xl flex flex-col gap-1 pl-4'>
                                    <p ><span className='font-semibold'>Model: </span>{car.carDetails.carModel}</p>
                                    <p ><span className=' font-semibold'>Rent: </span> ${car.carDetails.dailyRentalPrice}/day</p>
                                    
                                    <div className='flex items-center gap-2'>
                                        <p className=' font-semibold'>Availability:</p>
                                        <p className='text-2xl'> {car.carDetails.available} </p>
                                    </div>
                                    
                                    <p><span className=' font-semibold'>Bookings: </span>{car.carDetails.bookingCount}</p>
                                    <p><span className=' font-semibold'>Date Posted: </span> {car.carDetails.addedDate}</p>
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