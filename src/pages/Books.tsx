import React from 'react';
import Navbar from '@/components/Navbar';
import BookCategories from '@/components/BookCategories';
import Footer from '@/components/Footer';

const Books = () => {
  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-bookstore-navy mb-8 text-center">
            Our Book Collection
          </h1>
          <p className="text-lg text-bookstore-text text-center mb-12 max-w-3xl mx-auto">
            Explore our extensive collection of books across various categories, from academic materials to leisure reading.
          </p>
        </div>
        <BookCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Books;