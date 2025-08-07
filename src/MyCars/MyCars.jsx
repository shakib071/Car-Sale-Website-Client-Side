import React, { use, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyCars = () => {
    const {loading} = use(AuthContext);
    const carDataaaaa = useLoaderData();
    const [carData,setCarData] = useState(carDataaaaa);   
    const [openUpdate, setOpenUpdateModal] = useState(false);
    const [availability, setAvailability] = useState('Available');
    const [carToBeUpdated,setCarToBeUpdate] = useState(null);

    
    const handleChange = (e) => {
        setAvailability(e.target.value);
        
    };

    const handleModalOpenClose = (car) => {
        setOpenUpdateModal(true);
        setAvailability(car.carDetails.available);
        setCarToBeUpdate(car);

    }
    // console.log('car to be updated',carToBeUpdated);

    const handleUpdateToDatabase=(updatedCarDetails) =>{
        axios.patch(`https://car-sale-web-server.vercel.app/update-my-car/${carToBeUpdated._id}`,{"carDetails":updatedCarDetails})
        .then(res => {
            if(res.data.modifiedCount){
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Car has been Updated",
                showConfirmButton: false,
                timer: 1500
                });
                setOpenUpdateModal(false);
                // const newMyBookingData = [
                //         ...myBookingData.filter(item => item._id !== BookingData._id),
                //         { ...BookingData, carDetails: { ...BookingData.carDetails, available: "Unavailable" } }
                //         ];
                const newDataAfterUpdate = [ ...carData.filter(item=> item._id !== carToBeUpdated._id),
                    {...carToBeUpdated, carDetails:updatedCarDetails}
                ]
                setCarData(newDataAfterUpdate);
            }
        })
        .then(err => console.log(err))
    }

    const handleUpdateForm =(e) =>{
        e.preventDefault();
        const form = e.target ;
        const carModel = form.carModel.value;
        const dailyRentalPrice = parseInt(form.DailyRentalPrice.value);
        const available = availability;
        const vehicleRegNum = form.VehicleRegNum.value;
        const features = form.Features.value;
        const description = form.Description.value;
        const image = form.Image.value;
        const location = form.Location.value;
        //console.log(carModel,dailyRentalPrice,available,vehicleRegNum,features,description,image,location);

        const updatedCarDetails = {
            carModel,
            dailyRentalPrice,
            available,
            vehicleRegNum,
            features,
            description,
            bookingCount: carToBeUpdated.carDetails.bookingCount,
            image,
            location,
            addedDate: carToBeUpdated.carDetails.addedDate,
        }
        // console.log(updatedCarDetails);
        handleUpdateToDatabase(updatedCarDetails);
    }

    const handleDeleteCar = (car) =>{
        console.log(car);

        Swal.fire({
            title: "Are you sure you want to delete it?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
               axios.delete(`http://localhost:5000/delete-cars/${car._id}`)
                .then(res => {
                    
                    if(res.data.deletedCount){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your Car has been delete",
                            showConfirmButton: false,
                            timer: 1500
                            });
                        const newDataAfterDelete = carData.filter(item => item._id != car._id);
                        setCarData(newDataAfterDelete);
                    }
                })
                .then(err => console.log(err))
            }
            });
        

    }
    
    
    if(loading){
        return <Loading></Loading>;
    }

    

    return (
        <div>
            <p className='mt-12 text-4xl text-center font-bold'>My Cars</p>
         {
            carData.length >0 &&
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

                        {
                            carData.map(car => (
                                <tr key={car._id} className='text-center '>
                                    
                                    <td className='border-2'><img src={car.carDetails.image} alt="car image" /></td>
                                    <td className='border-2 text-xl font-semibold'>{car.carDetails.carModel}</td>
                                    <td className='border-2 text-xl font-semibold'>${car.carDetails.dailyRentalPrice}/day</td>
                                    <td className='border-2 text-xl font-semibold'>{car.carDetails.bookingCount}</td>
                                    <td className='border-2 text-xl font-semibold'>{car.carDetails.available}</td>
                                    <td className='border-2 text-xl font-semibold'>{car?.carDetails?.addedDate}</td>
                                    <td className='border-2 text-xl font-semibold'>
                                        <div className='flex flex-col gap-2'>
                                            <p onClick={()=>handleModalOpenClose(car)} className='bg-green-500 text-white px-2 py-1 cursor-pointer rounded-md '>Update</p>
                                            <p onClick={()=> handleDeleteCar(car)} className='bg-red-500 text-white px-2 py-1 cursor-pointer rounded-md '>Delete</p>
                                        </div>
                                    </td>
                                </tr> 
                            ))
                        }

                        
                  

                    
                       
                       
                    
                
                        </tbody>
                    
                    </table>

                </div>
                
                
               

                {openUpdate && (
                    <div className="fixed inset-0 mt-5 bg-opacity-40 flex items-center justify-center z-50">
                   
                    <div className="bg-white  rounded-lg w- shadow-lg relative">
                        
                        <div className='bg-green-400 px-11 py-6 flex flex-col items-center rounded-2xl shadow-2xl'>
                            
                            <p className='text-center text-3xl text-white font-semibold'>Update Car</p>

                            <form onSubmit={handleUpdateForm}  className='' >
                                <div className='flex mt-2 flex-col'>
                                    <label className='text-white font-semibold text-xl'>Car Model</label>
                                    <input className='input w-[500px] input-accent' name='carModel' placeholder='Car Model' type="text" defaultValue={carToBeUpdated.carDetails.carModel} required/>
                                </div> 
                                <div className='flex mt-2 flex-col'>
                                    <label className='text-white font-semibold text-xl'>Daily Rental Price</label>
                                    <input className='input w-[500px] input-accent' name='DailyRentalPrice' placeholder='Daily Rental Price' type="number" defaultValue={carToBeUpdated.carDetails.dailyRentalPrice} required/>
                                </div> 

                                <div className='mt-2'>
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

                                <div className='flex mt-2 flex-col'>
                                    <label className='text-white font-semibold text-xl'>Vehicle Registration Number</label>
                                    <input className='input w-[500px] input-accent' name='VehicleRegNum' placeholder='Vehicle Registration Number' type="text" defaultValue={carToBeUpdated.carDetails.vehicleRegNum} required/>
                                </div> 

                                <div className='flex mt-2 flex-col'>
                                    <label className='text-white font-semibold text-xl'>Features</label>
                                    <input className='input w-[500px] input-accent' name='Features' placeholder='Features e.g., GPS, AC, etc' type="text" defaultValue={carToBeUpdated.carDetails.features}  required/>
                                </div> 
                                <div className='flex mt-2 flex-col'>
                                    <label className='text-white font-semibold text-xl'>Description</label>
                                    <input className='input w-[500px] input-accent' name='Description' placeholder='Description' type="text" defaultValue={carToBeUpdated.carDetails.description} required/>
                                </div> 
                                
                                <div className='flex mt-2 flex-col'>
                                    <label className='text-white font-semibold text-xl'>Image url </label>
                                    <input className='input w-[500px] input-accent' name='Image' placeholder='Image url ' type="text" defaultValue={carToBeUpdated.carDetails.image} required/>
                                </div> 
                                <div className='flex mt-2 flex-col'>
                                    <label className='text-white font-semibold text-xl'>Location</label>
                                    <input className='input w-[500px] input-accent' name='Location' placeholder='Location' type="text" defaultValue={carToBeUpdated.carDetails.location} required/>
                                </div> 

                            
                                
                                <div className='mt-4 flex justify-center gap-10'>
                                    <button type='submit' className='bg-sky-500 cursor-pointer px-10 py-2 rounded-lg text-xl text-white font-semibold'>Update</button>
                                    <button className='bg-red-500 cursor-pointer px-10 py-2 rounded-lg text-xl text-white font-semibold' onClick={() => setOpenUpdateModal(false)}>Cancel</button>
                                </div>
                            
                            </form>

                        </div>

                     
                        
                    </div>
                    </div>
                )}
            </div>
         }

         {
            carData.length ==0 && 
            <div className='flex flex-col justify-center items-center mt-10'>
                <p className='text-3xl font-semibold text-red-400'>No Added Cars Available</p>
                <p className='text-xl mt-3 font-semibold'>You can always add Your car <Link to='/add-car'><span className='btn btn-accent text-white text-xl rounded-2xl shadow-2xl'>Here</span></Link></p>
            </div>
         }


        </div>
    );
};

export default MyCars;