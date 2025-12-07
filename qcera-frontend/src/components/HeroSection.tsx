import { ArrowDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-cream text-sm font-medium">Kirtipur, Kathmandu, Nepal</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-cream mb-6 animate-fade-up animation-delay-100">
            QCERA Nepal Traders and Suppliers
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gold-light font-heading mb-4 animate-fade-up animation-delay-200">
            Premium Bath & Kitchen Fittings
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-300 font-body">
            Where Design Meets Durability. Redefining comfort and elegance for modern homes in Kathmandu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <Button
              onClick={() => scrollToSection('#products')}
              size="lg"
              className="btn-gold text-lg px-8 py-6"
            >
              View Products
            </Button>
            <Button
              onClick={() => scrollToSection('#location')}
              variant="outline"
              size="lg"
              className="border-2 border-cream/50 text-cream hover:bg-cream/10 hover:border-cream text-lg px-8 py-6 bg-transparent"
            >
              Visit Showroom
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
