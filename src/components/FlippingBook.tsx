import React from 'react';

const FlippingBook = () => {
  return (
    <div className="flex justify-center items-center py-16 bg-bookstore-cream">
      <div className="book w-[220px] h-[320px] relative" style={{
        perspective: '1000px',
        background: '#8b5a2b',
        borderRadius: '10px',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
        padding: '5px'
      }}>
        <div className="bookmark absolute top-[10px] right-[10px] w-[40px] h-[80px] bg-red-500" style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
        }}></div>
        <div className="page w-full h-full absolute bg-[#fff8dc] border-2 border-[#8b5a2b] rounded" style={{
          transformOrigin: 'left',
          transition: 'transform 1s ease-in-out',
          transform: 'rotateY(0deg)'
        }}></div>
        <div className="page w-full h-full absolute bg-[#fff8dc] border-2 border-[#8b5a2b] rounded hover:rotate-y-0" style={{
          transformOrigin: 'left',
          transition: 'transform 1s ease-in-out',
          transform: 'rotateY(-180deg)'
        }}></div>
      </div>
    </div>
  );
};

export default FlippingBook;