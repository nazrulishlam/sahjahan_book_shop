
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { engineeringBooks } from '@/data/books/engineering';
import { Book } from '@/types/books';
import { CircuitBoard, BookOpen } from 'lucide-react';
import BookDetailsDialog from '@/components/BookDetailsDialog';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const EngineeringBooks = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(engineeringBooks);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const branches = [
    "Computer Science",
    "Electronics",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Environmental Engineering",
    "Mathematics",
    "Physics",
    "Chemistry",
  ];

  const semesters = [
    "1st Semester",
    "2nd Semester",
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
    "8th Semester"
  ];

  const handleSearch = () => {
    const filtered = engineeringBooks.filter((book) => {
      const matchBranch = !selectedBranch || book.branch === selectedBranch;
      const matchSemester = !selectedSemester || book.semester === selectedSemester;
      return matchBranch && matchSemester;
    });
    setFilteredBooks(filtered);
  };

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  const handleAddToCart = (e: React.MouseEvent, book: Book) => {
    e.stopPropagation();
    addToCart(book);
    toast({
      title: "Added to cart!",
      description: `"${book.title}" has been added to your cart.`,
    });
  };
  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-bookstore-navy mb-8">Engineering Books</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
                <Select onValueChange={setSelectedBranch}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((branch) => (
                      <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
                <Select onValueChange={setSelectedSemester}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {semesters.map((semester) => (
                      <SelectItem key={semester} value={semester}>{semester}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="mt-6 w-full" onClick={handleSearch}>
              <CircuitBoard className="mr-2 h-4 w-4" />
              Search Engineering Books
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredBooks.map((book) => (
              // <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Card 
              key={book.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleBookClick(book)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  {/* <img
                    src={book.coverImage}
                    alt={book.title}
                    className="object-cover w-full h-32"
                  /> */}
                  <picture>
                  <source srcSet={book.coverImage} type="image/webp" />
                  <img
                    src={book.coverImage.replace('/compressed/', '/images/books/').replace('.webp', '.jpg')}
                    alt={book.title}
                    className="object-cover w-full h-32"
                    loading="lazy"
                  />
                </picture>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-bookstore-navy mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-xs text-gray-600 mb-1 line-clamp-1">By {book.author}</p>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-bold text-bookstore-navy">₹{book.price}</p>
                    {book.originalPrice && (
                      <p className="text-xs text-gray-500 line-through">₹{book.originalPrice}</p>
                    )}
                  </div>
                  {/* <Button className="w-full text-xs py-1">
                    <BookOpen className="mr-1 h-3 w-3" /> Add to Cart
                  </Button> */}
                  <Button 
                    className="w-full text-xs py-1" 
                    onClick={(e) => handleAddToCart(e, book)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <BookDetailsDialog
        book={selectedBook}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
      <Footer />
    </div>
  );
};

export default EngineeringBooks;