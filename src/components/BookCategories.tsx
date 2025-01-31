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
  {
    title: "Technical Books",
    description: "In-depth guides for technology and engineering topics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Science Fiction",
    description: "Explore futuristic worlds and scientific adventures",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Programming",
    description: "Learn coding and software development",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "History",
    description: "Discover the stories of our past",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Biography",
    description: "Life stories of influential people",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Self Help",
    description: "Books for personal growth and development",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Children's Books",
    description: "Educational and entertaining books for kids",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Poetry",
    description: "Collections of classic and modern poetry",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

const BookCategories = () => {
  return (
    <section id="books" className="py-16 bg-bookstore-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-bookstore-navy mb-8">Our Book Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-bookstore-navy mb-2">{category.title}</h3>
                <p className="text-bookstore-text mb-4 flex-grow">{category.description}</p>
                <Button className="w-full bg-bookstore-navy hover:bg-bookstore-navy/90 mt-auto">
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