import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const FlippingBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;
  const isMobile = useIsMobile();

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(flipInterval);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 items-center min-h-[500px] w-full bg-bookstore-cream p-4 md:p-8">
        {/* Left side - Book */}
        <div className={`book w-[300px] md:w-[400px] h-[400px] md:h-[500px] relative cursor-pointer transition-transform duration-300 hover:scale-105 ${isMobile ? 'mb-8' : ''}`} style={{
          perspective: '1000px',
          background: '#8E9196',
          borderRadius: '10px',
          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
          padding: '8px'
        }}>
          <div className="bookmark absolute top-[12px] right-[12px] w-[40px] h-[80px] bg-[#8b4513] z-10" style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
          }}></div>

          {/* Cover page */}
          <div className="page w-full h-full absolute bg-[#f5e6d3] border-2 border-[#8b5a2b] rounded" style={{
            transformOrigin: 'left',
            transition: 'transform 1s ease-in-out',
            transform: currentPage >= 1 ? 'rotateY(-180deg)' : 'rotateY(0deg)',
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d'
          }}>
            <div className="absolute inset-0 flex items-center justify-center text-bookstore-brown text-xl md:text-2xl font-serif p-4 text-center">
              Welcome to Sahjahan Book House
            </div>
          </div>

          {/* Additional pages */}
          {[1, 2, 3, 4].map((pageNum) => (
            <div 
              key={pageNum}
              className="page w-full h-full absolute bg-[#faf7f2] border-2 border-[#8b5a2b] rounded" 
              style={{
                transformOrigin: 'left',
                transition: 'transform 1s ease-in-out',
                transform: currentPage > pageNum ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
                zIndex: totalPages - pageNum
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                <p className="text-bookstore-brown text-base md:text-lg font-serif leading-relaxed italic text-center">
                  {(() => {
                    switch(pageNum) {
                      case 1:
                        return "Sahjahan Book House in Hooghly is one of the leading businesses in the Book Shops.";
                      case 2:
                        return "We are well known for our extensive collection of Book Shops and Grammar Books.";
                      case 3:
                        return "Our specialty includes a wide range of English Books and educational materials.";
                      case 4:
                        return "Discover our vast collection of Novels and much more in our welcoming bookstore.";
                      default:
                        return "";
                    }
                  })()}
                </p>
              </div>
            </div>
          ))}

          {/* Back cover */}
          <div className="page w-full h-full absolute bg-[#f5e6d3] border-2 border-[#8b5a2b] rounded" style={{
            transformOrigin: 'left',
            transition: 'transform 1s ease-in-out',
            transform: 'rotateY(0deg)',
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            zIndex: -1
          }}>
            <div className="absolute inset-0 flex items-center justify-center text-bookstore-brown text-xl md:text-2xl font-serif p-4 text-center">
              Visit Us Today!
            </div>
          </div>
        </div>

        {/* Right side - Store Information */}
        <div className="w-full md:w-[400px] space-y-4 md:space-y-6 text-left animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-serif text-bookstore-brown mb-4">Our Collection</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/80 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white">
              <h3 className="text-lg md:text-xl font-serif text-bookstore-brown mb-2">Fiction</h3>
              <p className="text-bookstore-text text-sm md:text-base">Explore our vast collection of novels, short stories, and literary masterpieces.</p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white">
              <h3 className="text-lg md:text-xl font-serif text-bookstore-brown mb-2">Academic</h3>
              <p className="text-bookstore-text text-sm md:text-base">Find textbooks and reference materials for all educational levels.</p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white">
              <h3 className="text-lg md:text-xl font-serif text-bookstore-brown mb-2">Children's Books</h3>
              <p className="text-bookstore-text text-sm md:text-base">Discover magical stories and educational books for young readers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingBook;
