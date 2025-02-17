
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import {
  Gift,
  PartyPopper,
  Sparkles,
  Star,
  ShoppingCart,
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { festivalBooks } from '@/data/festival-books';

const FestivalOffers = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<typeof festivalBooks>([]);

  const addToCart = (book: any) => {
    setCart([...cart, book]);
    toast({
      title: "Added to Cart!",
      description: `${book.title} has been added to your cart`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bookstore-cream to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-bookstore-navy mb-6 relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <PartyPopper className="h-12 w-12 text-yellow-500 animate-bounce" />
              </span>
              Festival Special Offers
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Celebrate the season of joy with amazing discounts on your favorite books!
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-lg bg-yellow-100 text-yellow-800">
              <Gift className="w-5 h-5 mr-2" /> Up to 50% OFF
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg bg-purple-100 text-purple-800">
              <Sparkles className="w-5 h-5 mr-2" /> Special Bundles
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-bookstore-navy mb-12 text-center">
            Featured Festival Offers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivalBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-500 text-white px-3 py-1">
                        {book.discount}% OFF
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-bookstore-navy mb-2">
                      {book.title}
                    </h3>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{book.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-bookstore-navy">
                          ₹{Math.round(book.price * (1 - book.discount / 100))}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{book.price}
                        </span>
                      </div>
                      <Button
                        onClick={() => addToCart(book)}
                        className="bg-bookstore-navy hover:bg-bookstore-navy/90"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Button */}
      <motion.div
        className="fixed bottom-8 right-8"
        whileHover={{ scale: 1.05 }}
      >
        <Button
          size="lg"
          className="bg-bookstore-navy hover:bg-bookstore-navy/90 shadow-lg"
          onClick={() => window.location.href = '/cart'}
        >
          <ShoppingCart className="w-6 h-6 mr-2" />
          Cart ({cart.length})
        </Button>
      </motion.div>

      <Footer />
    </div>
  );
};

export default FestivalOffers;
