import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredProducts = [
  {
    name: 'Elegant Wall-Mount WC',
    category: 'Commode',
    price: 'NPR 25,000',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=500&auto=format&fit=crop',
    badge: 'Best Seller',
  },
  {
    name: 'Ceramic Counter Basin',
    category: 'Basin',
    price: 'NPR 12,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=500&auto=format&fit=crop',
    badge: 'New Arrival',
  },
  {
    name: 'Double Bowl Sink',
    category: 'Kitchen Sink',
    price: 'NPR 18,500',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=500&auto=format&fit=crop',
    badge: null,
  },
  {
    name: 'Chrome Basin Mixer',
    category: 'Mixer',
    price: 'NPR 8,500',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=500&auto=format&fit=crop',
    badge: 'Popular',
  },
  {
    name: 'LED Backlit Mirror',
    category: 'Mirror',
    price: 'NPR 15,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=500&auto=format&fit=crop',
    badge: null,
  },
  {
    name: 'Premium Single Lever Tap',
    category: 'Taps',
    price: 'NPR 5,500',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=500&auto=format&fit=crop',
    badge: 'Best Value',
  },
];

const FeaturedProducts = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Featured
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Bestselling Products
            </h2>
          </div>
          <Button
            variant="ghost"
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary hover:text-primary/80 group"
          >
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                    {product.badge}
                  </div>
                )}

                {/* Quick Action */}
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={scrollToContact}
                    className="btn-gold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
