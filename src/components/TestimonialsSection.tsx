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
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-bookstore-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-bookstore-navy mb-4">
          What Our Readers Say
        </h2>
        <p className="text-bookstore-text text-center mb-12 max-w-2xl mx-auto">
          Discover why book lovers choose us as their literary destination
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-current text-yellow-400"
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