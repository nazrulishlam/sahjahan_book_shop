import React from 'react';
import { motion } from 'framer-motion';

const EstablishedDate = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-bookstore-navy/10 to-bookstore-beige/20 opacity-50" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-2xl font-serif tracking-wider text-bookstore-navy/70">
              A Legacy of Literature
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center space-x-6"
          >
            <div className="h-[2px] w-16 bg-gradient-to-r from-bookstore-navy to-transparent" />
            <div className="text-center">
              <span className="block text-5xl md:text-7xl font-bold text-bookstore-navy">
                ESTD
              </span>
              <span className="block text-6xl md:text-8xl font-bold bg-gradient-to-r from-bookstore-navy to-bookstore-brown bg-clip-text text-transparent animate-pulse">
                1975
              </span>
            </div>
            <div className="h-[2px] w-16 bg-gradient-to-l from-bookstore-navy to-transparent" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-bookstore-text italic"
          >
            "Nearly five decades of nurturing minds and inspiring generations through the power of books"
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default EstablishedDate;