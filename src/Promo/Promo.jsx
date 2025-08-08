import React, { useEffect, useState } from 'react';
import './promo.css';
import wheelAnimation from './Wheel.json';
import Lottie from "lottie-react";

const Test = () => {
  
  useEffect(() => {
    const snowflakes = [];
    for (let i = 0; i < 50; i++) {
      const delay = Math.random() * 5;
      const duration = 5 + Math.random() * 10;
      const size = 5 + Math.random() * 10;
      const left = Math.random() * 100;

      snowflakes.push(
        <div 
          key={i}
          className="snowflake"
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            opacity: Math.random() * 0.7 + 0.3
          }}
        />
      );
    }
    setSnow(snowflakes);
  }, []);

  const [snow, setSnow] = useState([]);

  return (
    <div>
        <p className='mt-15 mb-15 text-center text-3xl font-bold'>Promotion</p>
        <div className=" promo-banner winter-theme">
        <div>
            {snow}
        </div>
        
        
        
        <div className="promo-content">
            <div className='flex justify-center'>
                <Lottie className='w-100 ' animationData={wheelAnimation} loop={true} />
            </div>
            <h2 className='text-2xl'>WINTER TIRE PACKAGE <span className="text-[#1bf407] text-3xl font-bold"><br />30% OFF</span></h2>
            <p className='text-xl text-[#e5e907]'>Get your car winter-ready with premium tires + free installation</p>
            
        </div>
        

        </div>
    </div>
  );
};

export default Test;