// import React from "react";
// import { BookOpen, Search, Home, BookText, Phone, Info, PartyPopper } from "lucide-react";
// import { Button } from "./ui/button";
// import { AnimeNavBar } from "./ui/anime-navbar";
// import { useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const getActiveNav = (path: string) => {
//     if (path === "/") return "Home";
//     if (path.includes("books")) return "Books";
//     if (path.includes("festival")) return "Festival Offered";
//     if (path.includes("about")) return "About";
//     if (path.includes("contact")) return "Contact";
//     return "Home";
//   };

//   const navItems = [
//     { name: "Home", url: "/", icon: Home },
//     { name: "Books", url: "/books", icon: BookText },
//     { name: "Festival Offered", url: "/festival", icon: PartyPopper },
//     { name: "About", url: "/about", icon: Info },
//     { name: "Contact", url: "/contact", icon: Phone },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-bookstore-cream border-b border-bookstore-beige">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <BookOpen className="h-8 w-8 text-bookstore-navy" />
//             <span className="ml-2 text-xl font-semibold text-bookstore-navy">
//               Sahjahan Book House
//             </span>
//           </div>

//           <div className="hidden md:flex items-center">
//             <Button variant="outline" className="flex items-center">
//               <Search className="h-4 w-4 mr-2" />
//               Search Books
//             </Button>
//           </div>
//         </div>
//       </div>
//       <AnimeNavBar items={navItems} defaultActive={getActiveNav(currentPath)} />
//     </nav>
//   );
// };

// export default Navbar;








import React from "react";
import { BookOpen, Search, Home, BookText, Phone, Info, PartyPopper, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { AnimeNavBar } from "./ui/anime-navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const currentPath = location.pathname;

  const getActiveNav = (path: string) => {
    if (path === "/") return "Home";
    if (path.includes("books")) return "Books";
    if (path.includes("festival")) return "Festival Offered";
    if (path.includes("about")) return "About";
    if (path.includes("contact")) return "Contact";
    return "Home";
  };

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Books", url: "/books", icon: BookText },
    { name: "Festival Offered", url: "/festival", icon: PartyPopper },
    { name: "About", url: "/about", icon: Info },
    { name: "Contact", url: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bookstore-cream border-b border-bookstore-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-bookstore-navy" />
            <span className="ml-2 text-xl font-semibold text-bookstore-navy">
              Sahjahan Book House
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Search Books
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center relative mr-2"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
      <AnimeNavBar items={navItems} defaultActive={getActiveNav(currentPath)} />
    </nav>
  );
};

export default Navbar;