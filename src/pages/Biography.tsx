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
import { books } from '@/data/books';
import { Book } from '@/types/books';
import BookDetailsDialog from '@/components/BookDetailsDialog';

const Biography = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedEra, setSelectedEra] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(
    books.filter(book => book.category === 'Biography')
  );

const [selectedBook, setSelectedBook] = useState<Book | null>(null);
const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = [
    "Political Leaders",
    "Scientists",
    "Business Leaders",
    "Artists",
    "Sports Personalities",
    "Social Reformers"
  ];

  const eras = [
    "Pre-Independence",
    "Post-Independence",
    "Contemporary",
    "Historical"
  ];

  const handleSearch = () => {
    const filtered = books.filter((book) => {
      const matchCategory = !selectedCategory || book.biographyType === selectedCategory;
      const matchEra = !selectedEra || book.era === selectedEra;
      return matchCategory && matchEra && book.category === 'Biography';
    });
    setFilteredBooks(filtered);

  };

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-bookstore-navy mb-8">Biography</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <Select onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Era</label>
                <Select onValueChange={setSelectedEra}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Era" />
                  </SelectTrigger>
                  <SelectContent>
                    {eras.map((era) => (
                      <SelectItem key={era} value={era}>{era}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="mt-6 w-full" onClick={handleSearch}>Search Biographies</Button>
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
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs text-gray-500 line-through">₹{Math.round(book.price * 1.15)}</span>
                    <span className="text-sm font-bold text-bookstore-navy">₹{book.price}</span>
                  </div>
                  <Button className="w-full text-xs py-1">Add to Cart</Button>
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

export default Biography;
