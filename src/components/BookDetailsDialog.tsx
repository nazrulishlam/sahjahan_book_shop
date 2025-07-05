
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Book } from "@/types/books";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
  
  interface BookDetailsDialogProps {
    book: Book | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  const BookDetailsDialog = ({ book, isOpen, onOpenChange }: BookDetailsDialogProps) => {
    const { addToCart } = useCart();
    const { toast } = useToast();
  
    if (!book) return null;


  const handleAddToCart = () => {
    addToCart(book);
    toast({
      title: "Added to cart!",
      description: `"${book.title}" has been added to your cart.`,
    });
  };
  
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl w-11/12 h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-bookstore-navy">
              {book.title}
            </DialogTitle>

            {/* oirginal */}
            {/* <DialogDescription>
            Book details and information
          </DialogDescription> */}


            {/* //test */}
            <DialogDescription>
              Book details and information
            </DialogDescription>
            {/* <Button onClick={handleAddToCart} className="absolute top-4 right-4">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button> */}


          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="aspect-[3/4] relative">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-bookstore-navy">Author</h3>
                <p>{book.author}</p>
              </div>
              {book.publisher && (
              <div>
                <h3 className="font-semibold text-bookstore-navy">Publisher</h3>
                <p>{book.publisher}</p>
              </div>
            )}
              {book.subject && (
                <div>
                  <h3 className="font-semibold text-bookstore-navy">Subject</h3>
                  <p>{book.subject}</p>
                </div>
              )}
              {book.class && (
                <div>
                  <h3 className="font-semibold text-bookstore-navy">Class</h3>
                  <p>{book.class}</p>
                </div>
              )}
              {book.board && (
                <div>
                  <h3 className="font-semibold text-bookstore-navy">Board</h3>
                  <p>{book.board}</p>
                </div>
              )}
              <div>
                <h3 className="font-semibold text-bookstore-navy">Category</h3>
                <p>{book.category}</p>
              </div>
              <div>
                <h3 className="font-semibold text-bookstore-navy">Price</h3>
                <p className="flex items-center gap-2">
                  ₹{book.price}
                  {book.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{book.originalPrice}
                    </span>
                  )}
                </p>
              </div>
              {/* {book.description && (
                <div>
                  <h3 className="font-semibold text-bookstore-navy">Description</h3>
                  <p className="text-sm text-gray-600">{book.description}</p>
                </div>
              )} */}

            <div className="pt-4">
              <Button onClick={handleAddToCart} className="w-full" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default BookDetailsDialog;
  