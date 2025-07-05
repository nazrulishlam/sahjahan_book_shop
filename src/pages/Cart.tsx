// import React from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';

// // const Cart = () => {
// //   return (
// //     <div className="min-h-screen bg-bookstore-cream">
// //       <Navbar />
// //       <main className="container mx-auto px-4 py-8">
// //         <h1>Shopping Cart</h1>
// import { Card } from '@/components/ui/card';
// import { useCart } from '@/contexts/CartContext';
// import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const Cart = () => {
//   const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
//   const { toast } = useToast();

//   const handleQuantityChange = (bookId: string, newQuantity: number) => {
//     if (newQuantity <= 0) {
//       removeFromCart(bookId);
//       toast({
//         title: "Book removed from cart",
//         description: "The book has been removed from your cart.",
//       });
//     } else {
//       updateQuantity(bookId, newQuantity);
//     }
//   };

//   const handleRemoveItem = (bookId: string, title: string) => {
//     removeFromCart(bookId);
//     toast({
//       title: "Book removed",
//       description: `"${title}" has been removed from your cart.`,
//     });
//   };

//   const handleClearCart = () => {
//     clearCart();
//     toast({
//       title: "Cart cleared",
//       description: "All items have been removed from your cart.",
//     });
//   };

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen bg-bookstore-cream">
//         <Navbar />
//         <main className="pt-24 pb-16">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-bookstore-navy mb-8">Shopping Cart</h1>
//             <div className="text-center py-16">
//               <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
//               <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
//               <p className="text-gray-500 mb-8">Add some books to get started!</p>
//               <Button asChild>
//                 <a href="/books">Browse Books</a>
//               </Button>
//             </div>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-bookstore-cream">
//       <Navbar />
//       <main className="pt-24 pb-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-bookstore-navy">Shopping Cart</h1>
//             <Button variant="outline" onClick={handleClearCart}>
//               Clear Cart
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2 space-y-4">
//               {items.map((item) => (
//                 <Card key={item.id} className="p-4">
//                   <div className="flex gap-4">
//                     <img
//                       src={item.coverImage}
//                       alt={item.title}
//                       className="w-20 h-28 object-cover rounded"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-bookstore-navy mb-1">{item.title}</h3>
//                       <p className="text-sm text-gray-600 mb-2">By {item.author}</p>
//                       {item.publisher && (
//                         <p className="text-sm text-gray-500 mb-2">{item.publisher}</p>
//                       )}
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                           >
//                             <Minus className="h-3 w-3" />
//                           </Button>
//                           <span className="font-medium">{item.quantity}</span>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                           >
//                             <Plus className="h-3 w-3" />
//                           </Button>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-semibold text-bookstore-navy">
//                             ₹{item.price * item.quantity}
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             ₹{item.price} each
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => handleRemoveItem(item.id, item.title)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </Card>
//               ))}
//             </div>

//             <div className="lg:col-span-1">
//               <Card className="p-6 sticky top-24">
//                 <h2 className="text-xl font-semibold text-bookstore-navy mb-4">Order Summary</h2>
//                 <div className="space-y-2 mb-4">
//                   <div className="flex justify-between">
//                     <span>Items ({totalItems})</span>
//                     <span>₹{totalPrice}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Shipping</span>
//                     <span className="text-green-600">Free</span>
//                   </div>
//                   <hr className="my-3" />
//                   <div className="flex justify-between font-semibold text-lg">
//                     <span>Total</span>
//                     <span className="text-bookstore-navy">₹{totalPrice}</span>
//                   </div>
//                 </div>
//                 <Button className="w-full">Proceed to Checkout</Button>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Cart;































import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
// import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleQuantityChange = (bookId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(bookId);
      toast({
        title: "Book removed from cart",
        description: "The book has been removed from your cart.",
      });
    } else {
      updateQuantity(bookId, newQuantity);
    }
  };

  const handleRemoveItem = (bookId: string, title: string) => {
    removeFromCart(bookId);
    toast({
      title: "Book removed",
      description: `"${title}" has been removed from your cart.`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const handleProceedToCheckout = () => {
    // Format cart items for WhatsApp message
    const orderDetails = items.map(item => 
      `📚 ${item.title}\n   By: ${item.author}\n   Qty: ${item.quantity}\n   Price: ₹${(item.price * item.quantity).toLocaleString()}`
    ).join('\n\n');

    const shippingCost = totalPrice > 500 ? 0 : 50;
    const finalTotal = totalPrice + shippingCost;

    const message = `🛒 *New Order Request*\n\n${orderDetails}\n\n📊 *Order Summary:*\nSubtotal: ₹${totalPrice.toLocaleString()}\nShipping: ${shippingCost === 0 ? 'Free' : `₹${shippingCost}`}\n*Total: ₹${finalTotal.toLocaleString()}*\n\nPlease confirm this order. Thank you!`;

    // Replace with your WhatsApp business number (include country code without +)
    const whatsappNumber = "916296683240"; // Replace with your actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const shippingCost = totalPrice > 500 ? 0 : 50;
  const finalTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-bookstore-cream">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/books')}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold text-bookstore-navy">Shopping Cart</h1>
            </div>
            <Card className="p-12 text-center">
              <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-gray-600 mb-3">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Discover amazing books and add them to your cart!</p>
              <Button 
                size="lg"
                onClick={() => navigate('/books')}
                className="px-8"
              >
                Browse Books
              </Button>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/books')}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-bookstore-navy">Shopping Cart</h1>
                <p className="text-gray-600 mt-1">{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={handleClearCart}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <Card key={item.id} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-24 h-32 object-cover rounded-lg shadow-sm"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-bookstore-navy mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-1">By {item.author}</p>
                          {item.publisher && (
                            <p className="text-sm text-gray-500 mb-2">{item.publisher}</p>
                          )}
                          {item.category && (
                            <span className="inline-block bg-bookstore-beige text-bookstore-navy text-xs px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id, item.title)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="font-medium text-lg min-w-[3ch] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-xl text-bookstore-navy">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            ₹{item.price.toLocaleString()} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < items.length - 1 && <hr className="mt-6" />}
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-bookstore-navy mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className={shippingCost === 0 ? "text-green-600 font-medium" : ""}>
                      {shippingCost === 0 ? "Free" : `₹${shippingCost}`}
                    </span>
                  </div>
                  {totalPrice < 500 && (
                    <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded">
                      Add ₹{(500 - totalPrice).toLocaleString()} more for free shipping!
                    </div>
                  )}
                  <hr className="my-4" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-bookstore-navy">₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* <Button className="w-full mb-4" size="lg"> */}
                <Button className="w-full mb-4" size="lg" onClick={handleProceedToCheckout}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Proceed to Checkout
                </Button>
                
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/books')}
                    className="w-full"
                  >
                    Continue Shopping
                  </Button>
                </div>

                <div className="mt-6 text-xs text-gray-500">
                  <p className="mb-2">✓ Secure checkout</p>
                  <p className="mb-2">✓ Free returns within 30 days</p>
                  <p>✓ Customer support available 24/7</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
