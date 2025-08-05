import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';

const MyCars = () => {
    const {loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>;
    }

    return (
        <div>
            <p className='mt-12 text-4xl text-center font-bold'>My Cars</p>

            <div className='mt-10 w-[95%] mx-auto'>

                <div className="overflow-x-auto">

                    <table className="table bg-white shadow-2xl table-md">
                        <thead>
                        <tr className='text-xl '>
                            
                            <th className='border-2 border-[#ea2b3e]'>Car Image</th>
                            <th className='border-2 border-[#ea2b3e]'>Car Model</th>
                            <th className='border-2 border-[#ea2b3e]'>Rental Price</th>
                            <th className='border-2 border-[#ea2b3e]'>Booking Count</th>
                            <th className='border-2 border-[#ea2b3e]'>Availability</th>
                            <th className='border-2 border-[#ea2b3e]'>Date Added</th>
                            <th className='border-2 border-[#ea2b3e]'>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className='text-center '>
                            
                            <td className='border-2'><img src="https://i.ibb.co.com/RkY8TgGD/667a2432-08b2-4039-9629-e436af619078.webp" alt="car image" /></td>
                            <td className='border-2 text-xl font-semibold'>Audi A8 2024</td>
                            <td className='border-2 text-xl font-semibold'>$160/day</td>
                            <td className='border-2 text-xl font-semibold'>22</td>
                            <td className='border-2 text-xl font-semibold'>Available</td>
                            <td className='border-2 text-xl font-semibold'>2025-08-01</td>
                            <td className='border-2 text-xl font-semibold'>
                                <div className='flex flex-col gap-2'>
                                    <p className='bg-green-500 text-white px-2 py-1 cursor-pointer rounded-md '>Update</p>
                                    <p className='bg-blue-500 text-white px-2 py-1 cursor-pointer rounded-md '>Delete</p>
                                </div>
                            </td>
                        </tr>    
                        <tr className='text-center '>
                            
                            <td className='border-2'><img src="https://i.ibb.co.com/RkY8TgGD/667a2432-08b2-4039-9629-e436af619078.webp" alt="car image" /></td>
                            <td className='border-2 text-xl font-semibold'>Audi A8 2024</td>
                            <td className='border-2 text-xl font-semibold'>$160/day</td>
                            <td className='border-2 text-xl font-semibold'>22</td>
                            <td className='border-2 text-xl font-semibold'>Available</td>
                            <td className='border-2 text-xl font-semibold'>2025-08-01</td>
                            <td className='border-2 text-xl font-semibold'>
                                <div className='flex flex-col gap-2'>
                                    <p className='bg-green-500 text-white px-2 py-1 cursor-pointer rounded-md '>Update</p>
                                    <p className='bg-blue-500 text-white px-2 py-1 cursor-pointer rounded-md '>Delete</p>
                                </div>
                            </td>
                        </tr>    
                        <tr className='text-center '>
                            
                            <td className='border-2'><img src="https://i.ibb.co.com/RkY8TgGD/667a2432-08b2-4039-9629-e436af619078.webp" alt="car image" /></td>
                            <td className='border-2 text-xl font-semibold'>Audi A8 2024</td>
                            <td className='border-2 text-xl font-semibold'>$160/day</td>
                            <td className='border-2 text-xl font-semibold'>22</td>
                            <td className='border-2 text-xl font-semibold'>Available</td>
                            <td className='border-2 text-xl font-semibold'>2025-08-01</td>
                            <td className='border-2 text-xl font-semibold'>
                                <div className='flex flex-col gap-2'>
                                    <p className='bg-green-500 text-white px-2 py-1 cursor-pointer rounded-md '>Update</p>
                                    <p className='bg-blue-500 text-white px-2 py-1 cursor-pointer rounded-md '>Delete</p>
                                </div>
                            </td>
                        </tr>   
                        <tr className='text-center '>
                            
                            <td className='border-2'><img src="https://i.ibb.co.com/RkY8TgGD/667a2432-08b2-4039-9629-e436af619078.webp" alt="car image" /></td>
                            <td className='border-2 text-xl font-semibold'>Audi A8 2024</td>
                            <td className='border-2 text-xl font-semibold'>$160/day</td>
                            <td className='border-2 text-xl font-semibold'>22</td>
                            <td className='border-2 text-xl font-semibold'>Available</td>
                            <td className='border-2 text-xl font-semibold'>2025-08-01</td>
                            <td className='border-2 text-xl font-semibold'>
                                <div className='flex flex-col gap-2'>
                                    <p className='bg-green-500 text-white px-2 py-1 cursor-pointer rounded-md '>Update</p>
                                    <p className='bg-blue-500 text-white px-2 py-1 cursor-pointer rounded-md '>Delete</p>
                                </div>
                            </td>
                        </tr>   
                        <tr className='text-center '>
                            
                            <td className='border-2'><img src="https://i.ibb.co.com/RkY8TgGD/667a2432-08b2-4039-9629-e436af619078.webp" alt="car image" /></td>
                            <td className='border-2 text-xl font-semibold'>Audi A8 2024</td>
                            <td className='border-2 text-xl font-semibold'>$160/day</td>
                            <td className='border-2 text-xl font-semibold'>22</td>
                            <td className='border-2 text-xl font-semibold'>Available</td>
                            <td className='border-2 text-xl font-semibold'>2025-08-01</td>
                            <td className='border-2 text-xl font-semibold'>
                                <div className='flex flex-col gap-2'>
                                    <p className='bg-green-500 text-white px-2 py-1 cursor-pointer rounded-md '>Update</p>
                                    <p className='bg-blue-500 text-white px-2 py-1 cursor-pointer rounded-md '>Delete</p>
                                </div>
                            </td>
                        </tr>  

                    
                       
                       
                    
                
                        </tbody>
                    
                    </table>

                </div>

            </div>
        </div>
    );
};

export default MyCars;