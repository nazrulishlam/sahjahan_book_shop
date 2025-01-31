import { Card } from "./ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-bookstore-navy">About Sahjahan Book House</h2>
            <p className="text-bookstore-text">
              For years, Sahjahan Book House has been serving the community of Pandua with an extensive
              collection of books. Our commitment to providing quality educational resources and
              literature has made us a trusted name in the region.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-bookstore-cream">
                <h3 className="text-2xl font-bold text-bookstore-navy">1000+</h3>
                <p className="text-bookstore-text">Books Available</p>
              </Card>
              <Card className="p-4 bg-bookstore-cream">
                <h3 className="text-2xl font-bold text-bookstore-navy">500+</h3>
                <p className="text-bookstore-text">Happy Customers</p>
              </Card>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Inside Sahjahan Book House"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-bookstore-navy/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;