import React, { useEffect, useState } from 'react';

const FlippingBook = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 3000); // Flips every 3 seconds

    return () => clearInterval(flipInterval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[400px] w-full bg-bookstore-cream">
      <div className="book w-[220px] h-[320px] relative cursor-pointer" style={{
        perspective: '1000px',
        background: '#8b5a2b',
        borderRadius: '10px',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
        padding: '5px'
      }}>
        <div className="bookmark absolute top-[10px] right-[10px] w-[40px] h-[80px] bg-red-500 z-10" style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
        }}></div>
        <div className="page w-full h-full absolute bg-[#fff8dc] border-2 border-[#8b5a2b] rounded" style={{
          transformOrigin: 'left',
          transition: 'transform 1s ease-in-out',
          transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'
        }}></div>
        <div className="page w-full h-full absolute bg-[#fff8dc] border-2 border-[#8b5a2b] rounded" style={{
          transformOrigin: 'left',
          transition: 'transform 1s ease-in-out',
          transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)'
        }}>
          <div className="absolute inset-0 flex items-center justify-center text-bookstore-brown text-lg font-semibold p-4 text-center">
            Sahjahan Book House in Hooghly is one of the leading businesses in the Book Shops. Also known for Book Shops, Grammar Books, English Books, Novels and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Sahjahan Book House, Hooghly
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingBook;