
import React from "react";
import { BookOpen, Search, Home, BookText, Phone, Info, PartyPopper } from "lucide-react";
import { Button } from "./ui/button";
import { NavBar } from "./ui/tubelight-navbar";

const Navbar = () => {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Books", url: "/books", icon: BookText },
    { name: "Festival Offered", url: "#festival", icon: PartyPopper },
    { name: "About", url: "#about", icon: Info },
    { name: "Contact", url: "#contact", icon: Phone },
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

          <div className="hidden md:flex items-center">
            <Button variant="outline" className="flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Search Books
            </Button>
          </div>
        </div>
      </div>
      <NavBar items={navItems} className="mt-0" />
    </nav>
  );
};

export default Navbar;
