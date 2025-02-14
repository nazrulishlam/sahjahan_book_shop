
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

const PrimaryBooks = () => {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(
    books.filter(book => ['I', 'II', 'III', 'IV', 'V'].includes(book.class || ''))
  );

  const classes = ["I", "II", "III", "IV", "V"];
  const subjects = [
    "English",
    "Mathematics",
    "Environmental Science",
    "Hindi",
    "Bengali",
    "General Knowledge",
  ];

  const handleSearch = () => {
    const filtered = books.filter((book) => {
      const matchClass = !selectedClass || book.class === selectedClass;
      const matchSubject = !selectedSubject || book.subject === selectedSubject;
      const isPrimaryBook = ['I', 'II', 'III', 'IV', 'V'].includes(book.class || '');
      return matchClass && matchSubject && isPrimaryBook;
    });
    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-bookstore-navy mb-8">Primary Books</h1>
          
          {/* Search Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                <Select onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        Class {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Select onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="mt-6 w-full" onClick={handleSearch}>Search Primary Books</Button>
          </div>

          {/* Results Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-bookstore-navy mb-2">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">By {book.author}</p>
                  {book.class && <p className="text-sm text-gray-600">Class: {book.class}</p>}
                  {book.subject && <p className="text-sm text-gray-600">Subject: {book.subject}</p>}
                  <p className="text-lg font-bold text-bookstore-navy mt-2">₹{book.price}</p>
                  <Button className="w-full mt-4">Add to Cart</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrimaryBooks;
