import React, { Suspense, use } from 'react';
import logoImg from '../assets/carLogo.avif'
import { Navigate, NavLink } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import Loading from '../Loading/Loading';





const Navbar = () => {

    const {logOut,user,loading} = use(AuthContext);
    
   

    const handleLogout= () =>{
        logOut()
        .then(()=>{

        })
        .catch((error)=>{
            console.log(error);
        })
    }

    if(loading){
        return <Loading></Loading>;
    }


    return (
        <Suspense fallback={<Loading></Loading>}>
        <div className='bg-white border-b-2  py-1 md:py-0 sticky top-0 z-50 rounded-lg shadow-xl'>

            <div className='w-[97%] sm:w-[98%] xl:w-[90%] 2xl:w-[90%]  mx-auto flex justify-between items-center'>
                <div>
                    <NavLink to='/'>
                        <div className='flex items-center gap-1'>
                            <img className='w-10 sm:w-15 md:w-18 lg:w-24 mt-2' src={logoImg} alt="logo"/>
                            <p className='text-4xl font-bold text-[#fc03a1]'>Carden</p>
                        </div>
                    </NavLink>
                    
                </div>
                <div className='flex gap-2 sm:gap-6 md:gap-3 lg:gap-6 items-center text-[11px] sm:text-lg md:text-xl lg:text-2xl xl:text-[29px] 2xl:text-[33px]'>
                    <NavLink to='/'><p className='font-semibold '>Home</p></NavLink>
                    <NavLink to='available-cars'><p className='font-semibold'>Available Cars</p></NavLink>
                    {
                       !loading && user &&
                        <>
                            <NavLink to='add-car'><p className='font-semibold'>Add Car</p></NavLink>
                            <NavLink to={`my-cars/${user.uid}`}><p className='font-semibold'>My Cars</p></NavLink>
                            <NavLink to='my-booking'><p className='font-semibold'>My Bookings</p></NavLink>
                        </> 
                    }
                    

                    
                </div>
                <div className='flex  gap-2 items-center md:gap-3 lg:gap-5 text-[11px] sm:text-lg md:text-xl lg:text-2xl xl:text-[29px] 2xl:text-[33px]'>
                   
                    {
                        !user && <NavLink to='/login'><p className='font-semibold'>Login</p></NavLink>
                    }
                    
                    {
                        user && <NavLink><p onClick={handleLogout} className='font-semibold'>Logout</p></NavLink>
                    }
                    

                </div>
            </div>

        </div>
        </Suspense>
    );
};

export default Navbar;