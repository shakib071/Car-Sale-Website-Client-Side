import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './specialOffer.css';

// import required modules
import { Pagination , Autoplay  } from 'swiper/modules';


export default function SpecialOffer() {

    const [offdata , setOffData] = useState([]);

    useEffect(()=>{
        fetch('./specialOffer.json')
        .then(res => res.json())
        .then(data => setOffData(data))
    },[]);

  return (
    <div className='mt-16'>
        <p className='mb-10 text-center text-3xl font-bold '>Special Offer</p>
      <Swiper
        dir="rtl"
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
       
        
        autoplay={{
            delay: 1000,
            reverseDirection: true, 
            disableOnInteraction: false,
        }}
        speed={1000}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
    <div>
     {
       
        offdata.map(off => (
                <SwiperSlide className='hover:scale-105 transition-transform duration-300' key={off.id}>  <motion.div
                    animate={{ x: [0,10,0] , y: [0, -10, 10,0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="md:w-100 h-40 py-50  bg-gradient-to-b from-green-400 to-blue-500  rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    >
                        <div >
                            <div>
                                <img className='px-2' src={off.image} alt="car image" />
                            </div>
                            <p className='text-[23px]'>{off.title}</p>
                            <p><span className='text-[#d41c3bdb]'>Price per Day  </span>- {off.price_per_day}</p>
                            <p className='text-[20px] text-[#15ea1f]'>{off.offer}</p>
                        </div>
                        
                    
                    </motion.div>
                </SwiperSlide>  
        ))
     }
    </div>


      </Swiper>
    </div>
  );
}
