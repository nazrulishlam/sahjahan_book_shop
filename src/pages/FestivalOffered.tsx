
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PartyPopper, Gift, BookOpen, Sparkles } from 'lucide-react';

const FestivalOffered = () => {
  const festivalDeals = [
    {
      id: 1,
      title: "Durga Puja Special",
      discount: "30% OFF",
      description: "Get amazing discounts on all Bengali literature books during this festive season. Explore our wide collection of Bengali literature and classics.",
      validTill: "October 15, 2024"
    },
    {
      id: 2,
      title: "Academic Season Sale",
      discount: "25% OFF",
      description: "Special discounts on all academic books. Perfect time to stock up on textbooks and study materials for the upcoming academic year.",
      validTill: "July 31, 2024"
    },
    {
      id: 3,
      title: "Summer Reading Festival",
      discount: "20% OFF",
      description: "Exciting offers on story books and novels. Make your summer vacation more enjoyable with our carefully curated collection of books.",
      validTill: "May 31, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEF7CD] to-[#FEC6A1]">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-bookstore-navy mb-4">
              Festival of Books
              <PartyPopper className="inline-block ml-4 h-8 w-8 text-yellow-500" />
            </h1>
            <p className="text-xl text-gray-600 mb-8">Celebrate the joy of reading with amazing offers!</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-bookstore-navy hover:bg-bookstore-navy/90">
                Explore Offers
              </Button>
            </div>
          </motion.div>

          {/* Festival Deals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {festivalDeals.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-full"
              >
                <Card className="p-6 hover:shadow-xl transition-shadow bg-white/90 backdrop-blur h-full flex flex-col justify-between">
                  <div>
                    <Gift className="h-12 w-12 text-bookstore-navy mb-4" />
                    <h3 className="text-2xl font-bold text-bookstore-navy mb-2">{deal.title}</h3>
                    <p className="text-3xl font-bold text-red-500 mb-4">{deal.discount}</p>
                    <p className="text-gray-600 mb-4">{deal.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-4">Valid till {deal.validTill}</p>
                    <Button className="w-full">Claim Offer</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur rounded-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-bookstore-navy mb-8 text-center">
              Featured Categories
              <Sparkles className="inline-block ml-2 h-6 w-6 text-yellow-500" />
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Academic", "Literature", "Children's Books", "Competitive"].map((category, index) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-bookstore-cream rounded-lg p-6">
                    <BookOpen className="h-8 w-8 mx-auto text-bookstore-navy mb-2" />
                    <h3 className="font-semibold text-bookstore-navy">{category}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-bookstore-navy text-white rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Latest Offers</h2>
            <p className="mb-6">Subscribe to our newsletter and never miss a deal!</p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-black"
              />
              <Button variant="outline" className="bg-white text-bookstore-navy hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FestivalOffered;