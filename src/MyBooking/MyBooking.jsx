import React, { use} from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import { useLoaderData } from 'react-router';

const MyBooking = () => {
    const {loading} = use(AuthContext);
    const myBookingData = useLoaderData();
    
    console.log('booking data ',myBookingData);

    const handleConfirmed = (bookingDateTime) => {
        const presentDateTime = new Date();
        const bookingDate = new Date(bookingDateTime);
        const dif = parseInt((presentDateTime - bookingDate)/1000);
        console.log(dif);
        if(dif >= 60){
            return  "Confirmed";
        }
        else{
            return "Pending";
        }
    }
    
    

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
                            
                            <th className='border-2 border-[#ea2b3e] bg-blue-300 hover:shadow-xl transition-transform duration-100 hover:scale-103 hover:rounded-lg'>Car Image</th>
                            <th className='border-2 border-[#ea2b3e] bg-red-50 hover:shadow-xl transition-transform duration-100 hover:scale-103 hover:rounded-lg '>Car Model</th>
                            <th className='border-2 border-[#ea2b3e] bg-blue-300 hover:shadow-xl transition-transform duration-100 hover:scale-103 hover:rounded-lg'>Booking Date</th>
                            <th className='border-2 border-[#ea2b3e] bg-red-50 hover:shadow-xl transition-transform duration-100 hover:scale-103 hover:rounded-lg'>Total Price</th>
                            <th className='border-2 border-[#ea2b3e] bg-blue-300 hover:shadow-xl transition-transform duration-100 hover:scale-103 hover:rounded-lg'>Booking Status</th>
                            <th className='border-2 border-[#ea2b3e] bg-red-50 hover:shadow-xl transition-transform duration-100 hover:scale-103 hover:rounded-lg'>Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            myBookingData.map((book,index) => (
                                <tr key={index} className={`text-center ${index%2 ==0 ? 'bg-white': 'bg-[#c4baba5b]' }`}>
                                    
                                    <td className='border-2'><img src={book.carDetails.image} alt="car image" /></td>
                                    <td className='border-2 text-xl font-semibold'>{book.carDetails.carModel}</td>
                                    <td className='border-2 text-xl font-semibold'>{book.carDetails.addedDate.split('T')[0]} at {book.carDetails.addedDate.split('T')[1].split('.')[0]}</td>
                                    <td className='border-2 text-xl font-semibold'>{Math.round(book.carDetails.dailyRentalPrice*1.2)} <br /> <span className='text-[12px] text-[#0000009b]'>with taxes</span></td>
                                    {/* <td className='border-2 text-xl font-semibold'>{book.carDetails.available=='Unavailable' ?'Cancelled':''} {book.carDetails.available=='Available' && book.carDetails.available !='Unavailable'  && (new Date() - new Date(book.carDetails.addedDate))>=60 ? 'Available':'Pending'}</td> */}
                                    {
                                        book.carDetails.available == 'Unavailable' && <td className='border-2 text-xl font-semibold'>Cancelled</td>
                                    }
                                    {
                                        book.carDetails.available == 'Available'  && <td className='border-2 text-xl font-semibold'>{handleConfirmed(book.carDetails.addedDate)}</td>
                                    }
                                   
                                    
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