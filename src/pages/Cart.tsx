import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { 
  MessageSquare,
  ShoppingBag,
  MapPin,
  Phone,
  Mail,
  User
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Cart = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppOrder = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Format the message for WhatsApp
    const message = `New Order Request%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Location: ${formData.location}%0A
Items: Sample Book 1, Sample Book 2%0A
Total: ₹2499`;

    // Replace with your WhatsApp number
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bookstore-cream to-orange-50">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-bookstore-navy mb-8 text-center">
              Your Cart
            </h1>

            <Card className="p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <User className="w-6 h-6 text-bookstore-navy" />
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex-1"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-bookstore-navy" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-bookstore-navy" />
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-bookstore-navy" />
                  <Input
                    name="location"
                    placeholder="Delivery Location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="flex-1"
                  />
                </div>
              </div>
            </Card>

            {/* Sample Cart Items */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Order Summary
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Sample Book 1</span>
                  <span>₹1499</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sample Book 2</span>
                  <span>₹1000</span>
                </div>
                <div className="border-t pt-4 flex justify-between items-center font-bold">
                  <span>Total</span>
                  <span>₹2499</span>
                </div>
              </div>
            </Card>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Order via WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
