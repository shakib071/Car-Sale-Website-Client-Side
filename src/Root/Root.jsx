import React, { use } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { AuthContext } from '../AuthProvider/AuthContext';


const Root = () => {
    const {user} = use(AuthContext);
    console.log('user is',user);
    return (
        <div className='flex bg-[#bab8b85c] flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;