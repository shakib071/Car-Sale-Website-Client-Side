import React, { use } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { AuthContext } from '../AuthProvider/AuthContext';
import { ToastContainer } from 'react-toastify';
import Loading from '../Loading/Loading';


const Root = () => {
    const {user,loading} = use(AuthContext);
    console.log('user is',user);
    if(loading){
        return <Loading></Loading>;
    }
    return (
        <div className='flex bg-[#bab8b85c] flex-col min-h-screen'>
            <ToastContainer position="top-right" autoClose={2000} />
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;