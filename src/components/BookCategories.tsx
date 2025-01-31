import { Card } from "./ui/card";
import { Button } from "./ui/button";

const categories = [
  {
    title: "Grammar Books",
    description: "Essential grammar resources for language learners",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "English Books",
    description: "Comprehensive collection of English literature and learning materials",
    image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Novels",
    description: "Wide range of fiction books from various genres",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Academic Books",
    description: "Textbooks and reference materials for students",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const BookCategories = () => {
  return (
    <section id="books" className="py-16 bg-bookstore-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-bookstore-navy mb-8">Our Book Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-bookstore-navy mb-2">{category.title}</h3>
                <p className="text-bookstore-text mb-4">{category.description}</p>
                <Button className="w-full bg-bookstore-navy hover:bg-bookstore-navy/90">
                  Browse Category
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCategories;