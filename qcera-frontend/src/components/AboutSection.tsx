import { Award, Shield, Sparkles, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Curated selection of top-tier bathroom and kitchen fittings from trusted manufacturers.',
  },
  {
    icon: Sparkles,
    title: 'Modern Designs',
    description: 'Contemporary aesthetics that transform your spaces into elegant sanctuaries.',
  },
  {
    icon: Shield,
    title: 'Durable & Long-Lasting',
    description: 'Products built to withstand daily use while maintaining their pristine appearance.',
  },
  {
    icon: HeartHandshake,
    title: 'Expert Guidance',
    description: 'Our experienced team helps you choose the perfect fittings for your home.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Crafting Beautiful Spaces Since Day One
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At QCERA Nepal Traders and Suppliers, we believe every home deserves the finest bathroom and kitchen fittings. 
            Located in the heart of Kirtipur, Kathmandu, our showroom showcases an exquisite collection 
            of premium fixtures designed to elevate your living spaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-muted/50 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gold-dark border-2 border-background"
                />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Trusted by <span className="text-foreground font-semibold">500+</span> homeowners and builders in Kathmandu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
