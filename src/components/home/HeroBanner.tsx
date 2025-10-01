import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroDates from '@/assets/hero-dates.jpg';

const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroDates})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-5 w-5 text-accent-gold" />
            <span className="text-accent-gold font-medium">Diwali Special Collection</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
            Celebrate the Festival of Lights with Luxury
          </h1>
          
          <p className="text-lg lg:text-xl mb-8 opacity-95">
            Discover our exclusive Diwali hampers featuring the world's finest gourmet dates, 
            artisanal chocolates, and premium dry fruits. Perfect for gifting and celebrations.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-gold text-accent-foreground group"
              asChild
            >
              <Link to="/collections/diwali">
                Shop Diwali Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <Link to="/shop">
                Explore All Products
              </Link>
            </Button>
          </div>

          {/* Offer Badge */}
          <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
            <span className="text-accent-gold">✨</span>
            <span className="text-sm">Get 20% off on orders above ₹5,000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;