
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { toast } from '@/components/ui/use-toast';
// import { BookPlus } from 'lucide-react';

// const RequestBook = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const formData = new FormData(e.currentTarget);
//       const response = await fetch('https://formcarry.com/s/YOUR_FORM_ID', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Accept': 'application/json'
//         }
//       });

//       if (response.ok) {
//         toast({
//           title: "Success!",
//           description: "Your book request has been submitted successfully.",
//         });
//         (e.target as HTMLFormElement).reset();
//       } else {
//         throw new Error('Failed to submit form');
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to submit your request. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-bookstore-cream">
//       <Navbar />
//       <main className="pt-24 pb-16">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="text-center mb-8">
//               <BookPlus className="h-12 w-12 mx-auto text-bookstore-navy mb-4" />
//               <h1 className="text-3xl font-bold text-bookstore-navy mb-2">Request a Book</h1>
//               <p className="text-gray-600">Can't find the book you're looking for? Let us know!</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Name
//                 </label>
//                 <Input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   placeholder="Enter your name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="Enter your email"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700 mb-1">
//                   Book Title
//                 </label>
//                 <Input
//                   id="bookTitle"
//                   name="bookTitle"
//                   type="text"
//                   required
//                   placeholder="Enter book title"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
//                   Author (if known)
//                 </label>
//                 <Input
//                   id="author"
//                   name="author"
//                   type="text"
//                   placeholder="Enter author name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Additional Details
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   placeholder="Any specific edition, publication year, or other details?"
//                   className="min-h-[100px]"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Request"}
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default RequestBook;















import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { BookPlus } from 'lucide-react';

const RequestBook = () => {
  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <BookPlus className="h-12 w-12 mx-auto text-bookstore-navy mb-4" />
              <h1 className="text-3xl font-bold text-bookstore-navy mb-2">Request a Book</h1>
              <p className="text-gray-600">Can't find the book you're looking for? Let us know!</p>
            </div>

            <form 
              action="https://formsubmit.co/nazrulpandua2015@gmail.com" 
              method="POST"
              className="space-y-6 bg-white p-6 rounded-lg shadow-md"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Book Title
                </label>
                <Input
                  id="bookTitle"
                  name="bookTitle"
                  type="text"
                  required
                  placeholder="Enter book title"
                />
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Author (if known)
                </label>
                <Input
                  id="author"
                  name="author"
                  type="text"
                  placeholder="Enter author name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any specific edition, publication year, or other details?"
                  className="min-h-[100px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-bookstore-navy hover:bg-bookstore-navy/90"
              >
                Submit Request
              </Button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestBook;