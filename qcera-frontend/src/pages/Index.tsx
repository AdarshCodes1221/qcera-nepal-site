import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title> QCERA Nepal Traders and Suppliers | Kirtipur, Kathmandu</title>
        <meta 
          name="description" 
          content=" QCERA Nepal Traders and Suppliers offers premium bathroom and kitchen fittings in Kirtipur, Kathmandu, Nepal. Shop commodes, basins, sinks, taps, mixers, mirrors, and accessories. Visit our showroom today." 
        />
        <meta name="keywords" content="bathroom fittings, kitchen fittings, commode, basin, kitchen sink, taps, mixers, Kathmandu, Kirtipur, Nepal, QCERA Nepal Traders and Suppliers" />
        <meta property="og:title" content="QCERA Nepal Traders and Suppliers- Premium Bathroom & Kitchen Fittings" />
        <meta property="og:description" content="Premium bathroom and kitchen fittings for modern homes in Kathmandu. Redefining comfort and elegance." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://QCERA Nepal.com" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <FeaturedProducts />
          <GallerySection />
          <LocationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
