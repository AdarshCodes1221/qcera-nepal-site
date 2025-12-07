import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ],
  products: [
    { name: 'Commode / WC', href: '#products' },
    { name: 'Basins', href: '#products' },
    { name: 'Kitchen Sinks', href: '#products' },
    { name: 'Taps & Mixers', href: '#products' },
    { name: 'Accessories', href: '#products' },
  ],
};

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-heading font-bold mb-4">QCERA</h2>
            <p className="text-cream/70 mb-6">
              Premium bathroom and kitchen fittings for modern homes. 
              Redefining comfort and elegance in Kathmandu.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/aadarsh.jha.714/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/theaadarshhhhh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* YouTube (placeholder for future link) */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-cream/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-cream/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-cream/70">
                  QCERA Nepal Traders and Suppliers<br />
                  Kirtipur, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+9779804955582" className="text-cream/70 hover:text-primary transition-colors">
                  +977 9804955582
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+9779807916468" className="text-cream/70 hover:text-primary transition-colors">
                  +977 9807916468
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+9779845890208" className="text-cream/70 hover:text-primary transition-colors">
                  +977 9845890208
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:tradersqceranepal@gmail.com" className="text-cream/70 hover:text-primary transition-colors">
                  tradersqceranepal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-premium py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} QCERA Nepal Traders and Suppliers. All rights reserved.
            </p>
            <p className="text-cream/50 text-sm">
              Premium Bathroom & Kitchen Fittings in Kathmandu
            </p>  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
