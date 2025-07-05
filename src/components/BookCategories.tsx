import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
// import BookDetailsDialog from "./BookDetailsDialog";
import { Book } from "@/types/books";
import { books } from "@/data/books";
import BookDetailsDialog from "./BookDetailsDialog";

const categories = [
  {
    title: "KG Nursery Books",
    description: "Educational materials for kindergarten and nursery students",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    path: "/kg-nursery-books"
  },
  {
    title: "Primary Books",
    description: "Books for primary school education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    path: "/primary-books"
  },
  {
    title: "Secondary Books",
    description: "Educational materials for secondary school students",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
    path: "/secondary-books"
  },
  {
    title: "Higher Secondary",
    description: "Books for higher secondary education",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    path: "/higher-secondary-books"
  },
  {
    title: "College Books",
    description: "Academic books for college students",
    image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7",
    path: "/college-books"
  },
  {
    title: "Vocational Books",
    description: "Books for vocational training and skills development",
    image: "https://images.unsplash.com/photo-1473221326025-9183b464bb7e",
    path: "/vocational-books"
  },
  {
    title: "D.El.Ed Books",
    description: "Resources for Diploma in Elementary Education",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    path: "/d-el-ed-books"
  },
  {
    title: "B.Ed Books",
    description: "Materials for Bachelor of Education students",
    image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7",
    path: "/b-ed-books"
  },
  {
    title: "Competitive Books",
    description: "Study materials for competitive examinations",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    path: "/competitive-books"
  },
  {
    title: "Biography",
    description: "Life stories of influential people",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    path: "/biography"
  },
  {
    title: "Story Books",
    description: "Collection of engaging stories and novels",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    path: "/story-books"
  },
  {
    title: "Dictionary",
    description: "Comprehensive language reference books",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
    path: "/dictionary"
  },
  {
    title: "English Grammar",
    description: "Books on English grammar rules and usage",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    path: "/english-grammar"
  },
  {
    title: "English Literature",
    description: "Classic and contemporary English literary works",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
    path: "/english-literature"
  },
  {
    title: "Programming Books",
    description: "Books on various programming languages and software development",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    path: "/programming-books"
  },
  {
    title: "Self Help Books",
    description: "Books focused on personal development and improvement",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    path: "/self-help-books"
  },
  {
    title: "Technical Books",
    description: "Books covering various technical subjects and engineering",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5",
    path: "/technical-books"
  },
  {
    title: "Children Books",
    description: "Books specially designed for children of all ages",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    path: "/children-books"
  },
  {
    title: "Indian Economics",
    description: "Books about Indian economic systems and policies",
    image: "https://images.unsplash.com/photo-1638439430466-b9d7cf30d531",
    path: "/indian-economics"
  },
  {
    title: "Indian Politics",
    description: "Books covering Indian political history and current affairs",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f",
    path: "/indian-politics"
  },
  {
    title: "Special Edition",
    description: "Limited and special edition books across various genres",
    image: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa",
    path: "/special-edition"
  },
  {
    title: "Engineering",
    description: "Technical books for various engineering disciplines",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    path: "/engineering-books"
  }
];

const BookCategories = () => {
  // const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  // const handleBookClick = (categoryPath: string) => {
  //   // const categoryBooks = books.filter(book => book.category.toLowerCase() === categoryPath.replace('/', '').replace('-books', ''));
  //   // if (categoryBooks.length > 0) {
  //   //   setSelectedBook(categoryBooks[0]);
  //   //   setIsDialogOpen(true);
  //       // Extract clean category name from path
  //       const categoryName = categoryPath.replace('/', '').replace('-books', '');
    
  //       // Map common path patterns to actual category names in the data
  //       const categoryMappings: Record<string, string> = {
  //         'kg-nursery': 'Basic Learning',
  //         'primary': 'Text Books',
  //         'secondary': 'Text Books',
  //         'higher-secondary': 'Text Books',
  //         'college': 'Text Books',
  //         'vocational': 'Vocational Books',
  //         'd-el-ed': 'D.El.Ed Books',
  //         'b-ed': 'B.Ed Books',
  //         'competitive': 'Competitive Books',
  //         'biography': 'Biography',
  //         'story': 'Story Books',
  //         'dictionary': 'Dictionary',
  //         'engineering': 'Engineering'
  //       };
        
  //       // Use the mapping if available, otherwise use the formatted category name
  //       const actualCategoryName = categoryMappings[categoryName] || 
  //         categoryName.split('-').map(word => 
  //           word.charAt(0).toUpperCase() + word.slice(1)
  //         ).join(' ');
        
  //       // Find books in this category
  //       const categoryBooks = books.filter(book => 
  //         book.category === actualCategoryName
  //       );
        
  //       console.log(`Looking for books in category: ${actualCategoryName}`);
  //       console.log(`Found ${categoryBooks.length} books`);
        
  //       if (categoryBooks.length > 0) {
  //         setSelectedBook(categoryBooks[0]);
  //         setIsDialogOpen(true);
  //       } else {
  //         console.log(`No books found for category: ${actualCategoryName}`);
  //   }
  // };


  return (
    <section id="books" className="py-12 bg-bookstore-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-bookstore-navy mb-6">Our Book Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            // <Card key={category.title} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
            <Card 
            key={category.title} 
            className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
            // onClick={() => handleBookClick(category.path)}
           >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-32"
                />
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-sm font-semibold text-bookstore-navy mb-1">{category.title}</h3>
                <p className="text-xs text-bookstore-text mb-2 flex-grow line-clamp-2">{category.description}</p>
                <Button 
                  className="w-full bg-bookstore-navy hover:bg-bookstore-navy/90 mt-auto text-xs py-1"
                  asChild
                >
                  <Link to={category.path}>
                    Browse Category
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* <BookDetailsDialog
        book={selectedBook}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      /> */}
    </section>
  );
};

export default BookCategories;
