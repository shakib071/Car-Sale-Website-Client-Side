import React, { use, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddCar = () => {
    const {loading,user} = use(AuthContext);
    const [availability, setAvailability] = useState('Available'); 
    const navigate = useNavigate();
    if(loading){
        return <Loading></Loading>;
    }

    const handleChange = (e) => {
        setAvailability(e.target.value);
           
    };

    const addCarDataToDatabase = (carData) => {
        console.log(carData);

        axios.post('https://car-sale-web-server.vercel.app/addCar',carData)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                    });

                navigate('/my-cars');
            }
        })
        .catch(error => console.log(error));
    }

    const handleAddCarForm = (e) => {
        e.preventDefault();
        const form = e.target ;
        const carModel = form.carModel.value;
        const dailyRentalPrice = form.DailyRentalPrice.value;
        const available = availability;
        const vehicleRegNum = form.VehicleRegNum.value;
        const features = form.Features.value;
        const description = form.Description.value;
        const bookingCount = form.bookingCount.value;
        const image = form.Image.value;
        const location = form.Location.value;
        // console.log(carModel,dailyRentalPrice,available,vehicleRegNum,features,description,bookingCount,image,location);
        const carDetails = {
            carModel,
            dailyRentalPrice,
            available,
            vehicleRegNum,
            features,
            description,
            bookingCount,
            image,
            location
        }
        const userWhoAdded = {
            name : user.displayName,
            email : user.email,
            photo : user.photoURL,
            uid : user.uid
        }
        const addedCarData = {
            carDetails,
            userWhoAdded
        }
        console.log(addedCarData);
        addCarDataToDatabase(addedCarData);
        // form.reset();
    }

    return (
        <div className='mt-12 w-[60%] mx-auto'>
           

             <div className='bg-green-400 p-11 flex flex-col items-center rounded-2xl shadow-2xl'>
                <p className='text-center text-3xl text-white font-semibold'>Add Car</p>
                
                <form onSubmit={handleAddCarForm}  className='' >
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Car Model</label>
                        <input className='input w-[500px] input-accent' name='carModel' placeholder='Car Model' type="text" required/>
                    </div> 
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Daily Rental Price</label>
                        <input className='input w-[500px] input-accent' name='DailyRentalPrice' placeholder='Daily Rental Price' type="number" required/>
                    </div> 

                    <div className='mt-5'>
                        <label className='text-white font-semibold text-xl'>Availability</label>
                        <div className="flex mt-2 items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                type="radio"
                                name="availability"
                                value="Available"
                                checked={availability === "Available"}
                                onChange={handleChange}
                                className="radio radio-info bg-[#ffffff]"
                                />
                                <p className='text-lg text-white'>Available</p>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                type="radio"
                                name="availability"
                                value="Unavailable"
                                checked={availability === "Unavailable"}
                                onChange={handleChange}
                                className="radio radio-info bg-[#ffffff]"
                                />
                                <p className='text-lg text-white'>Unavailable</p>
                            </label>
                        </div>
                    </div>

                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Vehicle Registration Number</label>
                        <input className='input w-[500px] input-accent' name='VehicleRegNum' placeholder='Vehicle Registration Number' type="text" required/>
                    </div> 

                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Features</label>
                        <input className='input w-[500px] input-accent' name='Features' placeholder='Features e.g., GPS, AC, etc' type="text"  required/>
                    </div> 
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Description</label>
                        <input className='input w-[500px] input-accent' name='Description' placeholder='Description' type="text" required/>
                    </div> 
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Booking Count</label>
                        <input className='input w-[500px] input-accent' name='bookingCount' placeholder='Booking Count' type="number" required/>
                    </div> 
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Image url </label>
                        <input className='input w-[500px] input-accent' name='Image' placeholder='Image url ' type="text" required/>
                    </div> 
                    <div className='flex mt-4 flex-col'>
                        <label className='text-white font-semibold text-xl'>Location</label>
                        <input className='input w-[500px] input-accent' name='Location' placeholder='Location' type="text" required/>
                    </div> 

                   
                    
                    <div className='mt-4 flex justify-center'>
                        <button type='submit' className='bg-sky-500 cursor-pointer w-full py-2 rounded-lg text-xl text-white font-semibold'>Submit</button>
                    </div>
                   
                </form>

            </div>
        </div>
    );
};

export default AddCar;
