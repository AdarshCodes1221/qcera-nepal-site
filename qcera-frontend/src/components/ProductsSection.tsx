import { Bath, Droplets, UtensilsCrossed, PipetteIcon, Glasses, LampDesk, CircleDot, Grip } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    icon: Bath,
    name: 'Commode / WC',
    description: 'Premium water closets with modern flush systems and elegant designs.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop',
    features: ['Dual Flush', 'Easy Clean', 'Water Efficient'],
  },
  {
    icon: Droplets,
    name: 'Basin',
    description: 'Stylish washbasins from counter-top to wall-mounted designs.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop',
    features: ['Anti-Scratch', 'Various Sizes', 'Modern Finish'],
  },
  {
    icon: UtensilsCrossed,
    name: 'Kitchen Sink',
    description: 'Durable stainless steel and granite sinks for your dream kitchen.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop',
    features: ['Rust-Free', 'Deep Bowl', 'Easy Drain'],
  },
  {
    icon: PipetteIcon,
    name: 'Taps & Faucets',
    description: 'Premium taps with smooth operation and lasting finish.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=600&auto=format&fit=crop',
    features: ['Ceramic Disc', 'Chrome Finish', 'Leak-Proof'],
  },
  {
    icon: CircleDot,
    name: 'Mixers',
    description: 'Basin mixers, sink mixers, and wall mixers for perfect water control.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=600&auto=format&fit=crop',
    features: ['Temperature Control', 'Single Lever', 'Premium Build'],
  },
  {
    icon: Glasses,
    name: 'Mirrors',
    description: 'Elegant bathroom mirrors with LED options and anti-fog features.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
    features: ['LED Backlit', 'Anti-Fog', 'Frameless Design'],
  },
  {
    icon: LampDesk,
    name: 'Pipes & Fittings',
    description: 'Quality waste pipes and connection pipes for reliable plumbing.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
    features: ['PVC Grade', 'Leak-Proof', 'Easy Install'],
  },
  {
    icon: Grip,
    name: 'Accessories',
    description: 'Soap cases, towel rings, hooks, and more to complete your bathroom.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop',
    features: ['Stainless Steel', 'Rust-Free', 'Elegant Design'],
  },
];

const ProductsSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Premium Fittings Collection
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our carefully curated range of bathroom and kitchen fittings, 
            designed to bring luxury and functionality to your home.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group card-premium overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/90 text-primary-foreground">
                      <category.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-cream">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
