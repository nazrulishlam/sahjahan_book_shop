import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import BookCategories from '@/components/BookCategories';
import Footer from '@/components/Footer';
import { LampContainer } from '@/components/ui/lamp';

const Books = () => {
  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main>
        <div className="pt-16"> {/* Added padding-top to account for navbar */}
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Discover Our <br /> Book Collection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-4 text-slate-300 text-center text-lg max-w-3xl"
            >
              Explore our extensive collection of books across various categories, from academic materials to leisure reading.
            </motion.p>
          </LampContainer>
        </div>
        <BookCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Books;