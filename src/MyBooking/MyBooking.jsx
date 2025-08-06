import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import { useLoaderData } from 'react-router';

const MyBooking = () => {
    const {loading} = use(AuthContext);
    const myBookingData = useLoaderData();
    console.log('booking data ',myBookingData);
    if(loading){
        return <Loading></Loading>;
    }
    return (
        <div>
            <p className='mt-10 text-4xl font-bold text-center'>My Booking</p>

            <div className='mt-10 w-[98%] mx-auto'>

                <div className="overflow-x-auto">

                    <table className="table bg-white shadow-2xl table-md">
                        <thead>
                        <tr className='text-xl '>
                            
                            <th className='border-2 border-[#ea2b3e]'>Car Image</th>
                            <th className='border-2 border-[#ea2b3e]'>Car Model</th>
                            <th className='border-2 border-[#ea2b3e]'>Booking Date</th>
                            <th className='border-2 border-[#ea2b3e]'>Total Price</th>
                            <th className='border-2 border-[#ea2b3e]'>Booking Status</th>
                            <th className='border-2 border-[#ea2b3e]'>Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            myBookingData.map(book => (
                                <tr key={book._id} className='text-center '>
                                    
                                    <td className='border-2'><img src={book.carDetails.image} alt="car image" /></td>
                                    <td className='border-2 text-xl font-semibold'>{book.carDetails.carModel}</td>
                                    <td className='border-2 text-xl font-semibold'>{book.carDetails.addedDate.split('T')[0]} at {book.carDetails.addedDate.split('T')[1].split('.')[0]}</td>
                                    <td className='border-2 text-xl font-semibold'>{Math.round(book.carDetails.dailyRentalPrice*1.2)} <br /> <span className='text-[12px] text-[#0000009b]'>with taxes</span></td>
                                    <td className='border-2 text-xl font-semibold'>{book.carDetails.available}</td>
                                    <td className='border-2 text-xl font-semibold'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='bg-green-500 text-white px-2 py-1 cursor-pointer rounded-md '>Modify</p>
                                            <p className='bg-blue-500 text-white px-2 py-1 cursor-pointer rounded-md '>Cancel</p>
                                        </div>
                                    </td>
                                </tr> 
                            ))
                        }
       
                         
                    
                       
                       
                    
                
                        </tbody>
                    
                    </table>

                </div>

            </div>
        </div>
    );
};

export default MyBooking;