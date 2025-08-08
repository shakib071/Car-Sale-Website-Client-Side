import axios from 'axios';
import React, { use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthContext';


const CarDetails = () => {
    const {user} = use(AuthContext);
    const DetailsData = useLoaderData();
    console.log('details',DetailsData);
    const navigate = useNavigate();


    const addMyBookingToDatabase = (bookingData) => {
        // console.log('booking data is',bookingData);
        bookingData.userWhoAdded.uid =  user.uid;
        bookingData.carDetails.addedDate = new Date();
        const BookDataToAdd = {
            carDetails : bookingData.carDetails,
            userWhoAdded : bookingData.userWhoAdded

        }
        console.log(BookDataToAdd);

        axios.post('https://car-sale-web-server.vercel.app/booking',BookDataToAdd)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Booked!",
                    text: "Your selected car has been booked.",
                    showConfirmButton: false,
                    timer: 1500
                    });
                
                navigate(`/my-booking/${user.uid}`);
               
            }
            
        })
        .catch(error => console.log(error));
    }



    const handleBooking = (bookingData) => {
        const titleText = `Do you want to book ${DetailsData.carDetails.carModel}? `;
        const textText = `You are booking ${DetailsData.carDetails.carModel} at price ${DetailsData.carDetails.dailyRentalPrice} per day`;
        Swal.fire({
            title: titleText,
            text: textText,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Book it!"
            }).then((result) => {
            if (result.isConfirmed) {
               
                addMyBookingToDatabase(bookingData);
            }
            });
    }

    return (
        <div>
            <p className='mt-10 text-4xl lg:text-6xl font-bold text-center'>Car Details</p>

            <div  className='mt-10 w-[95%] mx-auto bg-gradient-to-r from-[#61d90bb1] to-[#218bb992] rounded-2xl px-2 py-10 sm:px-10 md:p-12 lg:p-15 2xl:p-17'>
         
                    <div className=''>
                        <div className='flex flex-col items-center'>
                            <img className='w-190 ' src={DetailsData.carDetails.image} alt="car image"/>
                        </div>
                        <div className='text-xl md:text-2xl xl:text-3xl flex flex-col gap-1 pl-4'>
                            <p ><span className='font-semibold'>Model: </span>{DetailsData.carDetails.carModel}</p>
                            <p ><span className=' font-semibold'>Rent: </span> ${DetailsData.carDetails.dailyRentalPrice}/day</p>
                            
                            <div className='flex items-center gap-2'>
                                <p className=' font-semibold'>Availability:</p>
                                <p className=''> {DetailsData.carDetails.available} </p>
                            </div>
                            
                            <p><span className=' font-semibold'>Features: </span>{DetailsData.carDetails.features}</p>
                            <p><span className=' font-semibold'>Description: </span> <span className='text-[#000000a9]'>{DetailsData.carDetails.description}</span></p>
                            <Link><p onClick={()=>handleBooking(DetailsData)} className='lg:px-10 lg:py-7 text-2xl lg:text-3xl  font-bold btn rounded-xl mt-4'>Book Now</p></Link>
                        </div>
                        <div>
                    </div>
                                
                    </div>
            </div>
        </div>
    );
};

export default CarDetails;