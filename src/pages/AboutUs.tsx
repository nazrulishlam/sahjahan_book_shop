
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { BookOpen, Users, Clock, MapPin } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Extensive Collection",
      description: "We offer a vast selection of books across various categories, from academic to leisure reading."
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Our knowledgeable team is always ready to help you find the perfect book."
    },
    {
      icon: Clock,
      title: "Years of Experience",
      description: "Serving the community of Pandua with quality books for over many years."
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      description: "Located in the heart of Pandua, making it easy for everyone to access."
    }
  ];

  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-white/90">
              Serving the community with knowledge and inspiration since 1975
            </p>
          </motion.div>
        </div>
      </div>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Inside Sahjahan Book House"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-bookstore-navy">Our Journey</h2>
              <p className="text-gray-600">
                Sahjahan Book House has been an integral part of the Pandua community, serving book lovers and students alike. Our journey began with a simple mission: to make quality books accessible to everyone.
              </p>
              <p className="text-gray-600">
                Over the years, we've grown from a small bookshop to become one of the most trusted book retailers in the region, offering an extensive collection of academic books, literature, and more.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center">
                    <Icon className="h-12 w-12 text-bookstore-navy mb-3" />
                    <h3 className="text-xl font-semibold text-bookstore-navy mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;