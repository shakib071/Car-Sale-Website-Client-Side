import React from 'react';

const Loading = () => {
  // console.log('loading');
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <span className="loading loading-dots loading-lg text-blue-500"></span>
    </div>
    
    );
};

export default Loading;