import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our Showroom Location
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Experience our premium collection in person. Visit our showroom in Kirtipur, 
              Kathmandu to explore the finest bathroom and kitchen fittings with expert guidance.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    QCERA Nepal Traders and Suppliers<br />
                    Kirtipur-01,Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visiting Hours</h3>
                  <p className="text-muted-foreground">
                    Sunday - Friday: 10:00 AM - 7:00 PM<br />
                    Saturday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+977 9804955582,9807916468,9845890208" className="text-muted-foreground hover:text-primary transition-colors">
                    +977 9804955582, 9807916468, 9845890208
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:tradersqceranepal@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    tradersqceranepal@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              {/* Embedded Google Map for Kirtipur */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.39959075886!2d85.27000000000001!3d27.68000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b09f9b1e45%3A0x6a6e8f67f7e6c6e5!2sKirtipur%2C%20Kathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PRATEEK Showroom Location"
                className="w-full"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
