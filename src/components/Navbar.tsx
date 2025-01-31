import { useState } from "react";
import { Menu, X, BookOpen, Search } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bookstore-cream border-b border-bookstore-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-bookstore-navy" />
            <span className="ml-2 text-xl font-semibold text-bookstore-navy">
              Sahjahan Book House
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-bookstore-text hover:text-bookstore-navy transition-colors">
              Home
            </a>
            <a href="#about" className="text-bookstore-text hover:text-bookstore-navy transition-colors">
              About
            </a>
            <a href="#books" className="text-bookstore-text hover:text-bookstore-navy transition-colors">
              Books
            </a>
            <a href="#contact" className="text-bookstore-text hover:text-bookstore-navy transition-colors">
              Contact
            </a>
            <Button variant="outline" className="flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Search Books
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-bookstore-navy hover:text-bookstore-brown transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-bookstore-text hover:text-bookstore-navy transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-bookstore-text hover:text-bookstore-navy transition-colors"
            >
              About
            </a>
            <a
              href="#books"
              className="block px-3 py-2 text-bookstore-text hover:text-bookstore-navy transition-colors"
            >
              Books
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-bookstore-text hover:text-bookstore-navy transition-colors"
            >
              Contact
            </a>
            <Button variant="outline" className="w-full mt-2 flex items-center justify-center">
              <Search className="h-4 w-4 mr-2" />
              Search Books
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;