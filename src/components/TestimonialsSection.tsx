import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Book Enthusiast",
    content: "This bookstore has an incredible selection of books. The atmosphere is perfect for browsing, and the staff recommendations are always spot-on!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Literature Professor",
    content: "As an academic, I appreciate the well-curated collection of scholarly works. The rare books section is particularly impressive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Parent",
    content: "The children's section is magical! My kids love coming here for storytime. It's become our weekly tradition.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Fiction Writer",
    content: "The writing workshops and author events here are phenomenal. It's more than a bookstore - it's a community hub for literary minds.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Book Club Organizer",
    content: "We host our monthly book club meetings here. The staff is incredibly accommodating and their book recommendations spark great discussions.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "History Buff",
    content: "Their collection of historical books and first editions is outstanding. I always find rare gems that I can't find anywhere else.",
    rating: 5,
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-bookstore-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-bookstore-navy mb-4 animate-fade-in">
          What Our Readers Say
        </h2>
        <p className="text-bookstore-text text-center mb-12 max-w-2xl mx-auto animate-fade-in">
          Discover why book lovers choose us as their literary destination
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-current text-yellow-400 animate-scale-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-bookstore-text mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-bookstore-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;