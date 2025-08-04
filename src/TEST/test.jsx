import React, { useEffect } from 'react';
import './SeasonalBanner.css'; // Create this CSS file

const Test = () => {
  // Create 50 snowflakes
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

  const [snow, setSnow] = React.useState([]);

  return (
    <div className="promo-banner winter-theme">
      {/* Animated Snowflakes */}
      {snow}
      
      {/* Promo Content */}
      <div className="promo-content">
        <span className="promo-icon">❄️</span>
        <h2>WINTER TIRE PACKAGE <span className="discount">30% OFF</span></h2>
        <p>Get your car winter-ready with premium tires + free installation</p>
        <button className="cta-button">Claim Offer</button>
      </div>
    </div>
  );
};

export default Test;