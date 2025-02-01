import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookCategories from "@/components/BookCategories";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FlippingBook from "@/components/FlippingBook";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <FlippingBook />
        <BookCategories />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;