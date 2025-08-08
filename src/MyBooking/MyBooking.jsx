import React, {Suspense, use, useEffect, useState} from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import { useLoaderData, useNavigation } from 'react-router';
import { FaTrashAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Swal from 'sweetalert2';
import axios from 'axios';


const MyBooking = () => {
    const {loading} = use(AuthContext);
    const BookingData = useLoaderData();
    const [modifyModalOpen,setModifyModalOpen] = useState(false);
    const [toBeModifyData,setToBeModifyData] = useState(null);
    const [myBookingData,setMyBookingData] = useState(BookingData);
    const [dateTime, setDateTime] = useState('2025-08-07T21:13');

    const navigation = useNavigation();

    useEffect(() => {
        const now = new Date();
        const pad = (n) => String(n).padStart(2,'0');

        const formatted = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
        setDateTime(formatted);
    },[]);

    if(navigation.state === 'loading') {
        return <Loading></Loading>;
    }
    

    
    

    const handleDateTimeChange = (e) =>{
        setDateTime(e.target.value);
    }

    const handleSetModified = (booking) => {
        setModifyModalOpen(true);
        setToBeModifyData(booking);
    }

    // console.log(toBeModifyData);

    const handleModifyForm = (e) => {
        e.preventDefault();
        const date = new Date(dateTime);
        const formattedDate = date.toISOString();
        console.log(formattedDate);

        axios.patch(`https://car-sale-web-server.vercel.app/update-booking-data/${toBeModifyData._id}`,{"carDetails.addedDate": formattedDate})
        .then((res)=> {
            if(res.data.modifiedCount){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your booking  has been rescheduled",
                    showConfirmButton: false,
                    timer: 1500
                    });

                const newMyBookingData = [
                        ...myBookingData.filter(item => item._id !== toBeModifyData._id),
                        { ...toBeModifyData, carDetails: { ...toBeModifyData.carDetails, addedDate: formattedDate } }
                        ];
                setMyBookingData(newMyBookingData);
                setModifyModalOpen(false);
                
            }
        })
        .then((error)=> console.log(error))
    }
    

    const handleConfirmed = (bookingDateTime) => {
        const presentDateTime = new Date();
        const bookingDate = new Date(bookingDateTime);
        const dif = parseInt((presentDateTime - bookingDate)/1000);
        // console.log(dif);
        if(dif >= 60){
            return  "Confirmed";
        }
        else{
            return "Pending";
        }
    }

    


    const handleCancelBooking = (BookingData) =>{
        Swal.fire({
            title: "Are you sure you want cancel this booking?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
            }).then((result) => {
            if (result.isConfirmed) {
            //    console.log(BookingData.carDetails.available);
               axios.patch(`https://car-sale-web-server.vercel.app/update-booking-data/${BookingData._id}`,{"carDetails.available": "Unavailable"})
               .then(res =>{
                 if(res.data.modifiedCount){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your booking  has been canceled",
                        showConfirmButton: false,
                        timer: 1500
                        });

                    // const newMyBookingData = myBookingData.filter(item => item._id != BookingData._id);
                    // BookingData.carDetails.available = "Unavailable";
                    const newMyBookingData = [
                        ...myBookingData.filter(item => item._id !== BookingData._id),
                        { ...BookingData, carDetails: { ...BookingData.carDetails, available: "Unavailable" } }
                        ];

                    setMyBookingData(newMyBookingData);
                 }
               })
               .then(err => console.log(err));
            }
            });
    }

    const handleDateTime = (dateTime) => {
       
        const date = new Date(dateTime);
        const localDate = date.toLocaleDateString();
        const localTime = date.toLocaleTimeString();
        const dateTimeDate = `${localDate}  ${localTime}`;
        
        return dateTimeDate;
    }

    
    
    

    if(loading){
        return <Loading></Loading>;
    }
    return (
        <Suspense fallback={<Loading></Loading>}>
        <div>
            <p className='mt-10 text-4xl font-bold text-center'>My Booking</p>

            <div className='mt-10 w-[98%] 2xl:w-[95%] mx-auto'>

                <div className="overflow-x-auto">

                    <table className="table bg-white  shadow-2xl table-md">
                        <thead>
                        <tr className='text-sm sm:text-[11px] md:text-[13px] lg:text-xl xl:text-2xl 2xl:text-3xl'>
                            
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
                                    <td className='border-2 sm:text-[12px]  lg:text-xl md:text-[13px] xl:text-2xl 2xl:text-3xl font-semibold'>{book.carDetails.carModel}</td>
                                    <td className='border-2 sm:text-[12px] lg:text-xl md:text-[15px] xl:text-2xl 2xl:text-3xl  font-semibold'>{handleDateTime(book.carDetails.addedDate)}</td>
                                    <td className='border-2 sm:text-[12px] lg:text-xl md:text-[15px] xl:text-2xl 2xl:text-3xl  font-semibold'>{Math.round(book.carDetails.dailyRentalPrice*1.2)} <br /> <span className='text-[12px] xl:text-[17px] 2xl:text-[21px] text-[#0000009b]'>with taxes</span></td>
                                    {/* <td className='border-2 text-xl font-semibold'>{book.carDetails.available=='Unavailable' ?'Cancelled':''} {book.carDetails.available=='Available' && book.carDetails.available !='Unavailable'  && (new Date() - new Date(book.carDetails.addedDate))>=60 ? 'Available':'Pending'}</td> */}
                                    {
                                        book.carDetails.available == 'Unavailable' && <td className='border-2 sm:text-[12px] md:text-[13px]  lg:text-xl xl:text-2xl 2xl:text-3xl  font-semibold'>Cancelled</td>
                                    }
                                    {
                                        book.carDetails.available == 'Available'  && <td className='border-2 sm:text-[12px] md:text-[13px] lg:text-xl xl:text-2xl 2xl:text-3xl  font-semibold'>{handleConfirmed(book.carDetails.addedDate)}</td>
                                    }
                                   
                                    
                                    <td className='border-2 lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold'>
                                        <div className='flex flex-col gap-2'>
                                            <div onClick={()=>handleSetModified(book) }  className='flex items-center gap-2 bg-blue-700 text-white px-2 py-1 xl:px-4 xl:py-2  cursor-pointer rounded-md'>
                                                <p><SlCalender className='text-green-500 font-bold' /></p>
                                                <p className=''>Modify</p>
                                            </div>
                                            <div onClick={()=> handleCancelBooking(book)} className='bg-red-500 flex items-center gap-2 text-white px-2 py-1 cursor-pointer rounded-md '>
                                                <p><FaTrashAlt className='text-[#21ea0a]' /></p>
                                                <p >Cancel</p>
                                            </div>
                                           
                                        </div>
                                    </td>
                                </tr> 
                            ))
                        }
                    
                    
                
                        </tbody>
                    
                    </table>

                </div>


                {modifyModalOpen && (
                    <div className="fixed inset-0  bg-opacity-100 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-120 shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4">Pick a date</h2>
                        <div>
                            <form onSubmit={handleModifyForm}>
                                <div>
                                    <label for="datetime" class="block mb-2 font-semibold">Pick Date & Time:</label>
                                    <input
                                        type="datetime-local"
                                        id="datetime"
                                        defaultValue={dateTime}
                                        onChange={handleDateTimeChange}
                                        name="datetime"
                                        class="border px-3 py-2 rounded-md"
                                    />

                                </div>

                                <div className='mt-4 flex gap-6'>
                                    <button type='submit' className='text-xl btn btn-accent text-white'>Modify Data</button>
                                    <button
                                        className="text-xl bg-red-500 text-white btn btn-accent "
                                        onClick={() => setModifyModalOpen(false)}
                                        >
                                            Cancel
                                    </button>
                                </div>
            
                                
                            </form>
                        </div>


                    </div>
                    </div>
                )}
                

            </div>
        </div>
        </Suspense>
    );
};

export default MyBooking;