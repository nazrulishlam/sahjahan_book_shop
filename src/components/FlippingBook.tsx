import React, { useEffect, useState } from 'react';

const FlippingBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5; // Total number of pages including cover

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000); // Flips every 3 seconds

    return () => clearInterval(flipInterval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[500px] w-full bg-bookstore-cream">
      <div className="book w-[400px] h-[400px] relative cursor-pointer" style={{
        perspective: '1000px',
        background: '#8E9196', // A realistic neutral gray color for the book
        borderRadius: '10px',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
        padding: '5px'
      }}>
        <div className="bookmark absolute top-[10px] right-[10px] w-[40px] h-[80px] bg-red-500 z-10" style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
        }}></div>

        {/* Cover page */}
        <div className="page w-full h-full absolute bg-[#fff8dc] border-2 border-[#8b5a2b] rounded" style={{
          transformOrigin: 'left',
          transition: 'transform 1s ease-in-out',
          transform: currentPage >= 1 ? 'rotateY(-180deg)' : 'rotateY(0deg)',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d'
        }}>
          <div className="absolute inset-0 flex items-center justify-center text-bookstore-brown text-2xl font-serif p-4 text-center">
            Welcome to Sahjahan Book House
          </div>
        </div>

        {/* Additional pages */}
        {[1, 2, 3, 4].map((pageNum) => {
          let pageContent = "";
          switch(pageNum) {
            case 1:
              pageContent = "Sahjahan Book House in Hooghly is one of the leading businesses in the Book Shops.";
              break;
            case 2:
              pageContent = "We are well known for our extensive collection of Book Shops and Grammar Books.";
              break;
            case 3:
              pageContent = "Our specialty includes a wide range of English Books and educational materials.";
              break;
            case 4:
              pageContent = "Discover our vast collection of Novels and much more in our welcoming bookstore.";
              break;
          }
          
          return (
            <div 
              key={pageNum}
              className="page w-full h-full absolute bg-white border-2 border-[#8b5a2b] rounded" 
              style={{
                transformOrigin: 'left',
                transition: 'transform 1s ease-in-out',
                transform: currentPage > pageNum ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
                zIndex: totalPages - pageNum
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <p className="text-bookstore-brown text-xl font-serif leading-relaxed italic text-center">
                  {pageContent}
                </p>
              </div>
            </div>
          );
        })}

        {/* Back cover */}
        <div className="page w-full h-full absolute bg-[#fff8dc] border-2 border-[#8b5a2b] rounded" style={{
          transformOrigin: 'left',
          transition: 'transform 1s ease-in-out',
          transform: 'rotateY(0deg)',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          zIndex: -1
        }}>
          <div className="absolute inset-0 flex items-center justify-center text-bookstore-brown text-2xl font-serif p-4 text-center">
            Visit Us Today!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingBook;