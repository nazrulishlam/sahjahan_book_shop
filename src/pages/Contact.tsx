import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-bookstore-cream">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <MessageCircle className="h-16 w-16 mx-auto text-bookstore-navy mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-bookstore-navy mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-all">
                  <MapPin className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold text-bookstore-navy mb-2">Visit Us</h3>
                  <p className="text-gray-600">Joypur Road, Near Water Tank, Pandua, Hooghly</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-all">
                  <Phone className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-bookstore-navy mb-2">Call Us</h3>
                  <p className="text-gray-600">+91 9475063722</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="p-6 bg-gradient-to-br from-pink-50 to-white hover:shadow-xl transition-all">
                  <Mail className="h-8 w-8 text-pink-600 mb-4" />
                  <h3 className="text-xl font-semibold text-bookstore-navy mb-2">Email Us</h3>
                  <p className="text-gray-600">nazrulpandua@gmail.com</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="p-6 bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-all">
                  <Clock className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-bookstore-navy mb-2">Business Hours</h3>
                  <p className="text-gray-600">Saturday - Thursday</p>
                  <p className="text-gray-600">10:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Friday: Closed</p>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 bg-white shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input 
                        placeholder="John Doe"
                        className="bg-gray-50 border-gray-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="john@example.com"
                        className="bg-gray-50 border-gray-200"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input 
                      placeholder="How can we help?"
                      className="bg-gray-50 border-gray-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message..."
                      className="bg-gray-50 border-gray-200 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-bookstore-navy hover:bg-bookstore-navy/90">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <a
              href="https://maps.google.com/?q=Sahjahan+Book+House+Pandua"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/images/books/google_map_image.png"
                alt="Store Location"
                className="w-full h-[400px] object-cover hover:opacity-95 transition-opacity"
              />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;