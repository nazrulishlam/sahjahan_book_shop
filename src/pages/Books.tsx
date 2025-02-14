
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import BookCategories from '@/components/BookCategories';
import Footer from '@/components/Footer';
import { LampContainer } from '@/components/ui/lamp';
import { Button } from '@/components/ui/button';
import { BookPlus } from 'lucide-react';

const Books = () => {
  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main>
        <div className="pt-28 px-4 sm:px-6 lg:px-8">
          <LampContainer className="min-h-[60vh]">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-4 text-slate-300 text-center text-lg max-w-3xl px-4"
            >
              Explore our extensive collection of books across various categories, from academic materials to leisure reading.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
                asChild
              >
                <Link to="/request">
                  <BookPlus className="mr-2 h-5 w-5" />
                  Request a Book
                </Link>
              </Button>
            </motion.div>
          </LampContainer>
        </div>
        <BookCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Books;
