
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-bookstore-cream to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-bookstore-navy mb-4">Get In Touch</h2>
          <p className="text-bookstore-text max-w-2xl mx-auto">
            Have questions about our book collection or want to place a bulk order? 
            We're here to help you find exactly what you need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-bookstore-navy mb-6">Contact Information</h3>
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-bookstore-navy/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-bookstore-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-bookstore-navy">Visit Us</h4>
                    <p className="text-bookstore-text mt-1">Joypur Road, Near Water Tank, Pandua, Hooghly</p>
                    <p className="text-bookstore-text">West Bengal, India</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-bookstore-navy/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-bookstore-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-bookstore-navy">Call Us</h4>
                    <p className="text-bookstore-text mt-1">+91 1234567890</p>
                    <p className="text-bookstore-text">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-bookstore-navy/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-bookstore-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-bookstore-navy">Email Us</h4>
                    <p className="text-bookstore-text mt-1">contact@sahjahanbooks.com</p>
                    <p className="text-bookstore-text">support@sahjahanbooks.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-bookstore-navy/10 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-bookstore-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-bookstore-navy">WhatsApp</h4>
                    <p className="text-bookstore-text mt-1">Message us on WhatsApp</p>
                    <Button 
                      variant="link" 
                      className="p-0 text-bookstore-navy hover:text-bookstore-navy/80"
                      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                    >
                      +91 1234567890
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-bookstore-navy mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-white"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="bg-white"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="bg-white"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="bg-white"
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-bookstore-navy hover:bg-bookstore-navy/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
