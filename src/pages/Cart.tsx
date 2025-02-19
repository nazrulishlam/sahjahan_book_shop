import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Cart = () => {
  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1>Shopping Cart</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
