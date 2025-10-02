import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import heroDates from '@/assets/hero-dates.jpg';
import stuffedDates from '@/assets/stuffed-dates.jpg';
import chocolateDates from '@/assets/chocolate-dates.jpg';
import ramadanHamper from '@/assets/ramadan-hamper.jpg';
import { useEffect, useState } from 'react';

const HeroBanner = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  
  const heroImages = [
    heroDates,
    stuffedDates,
    chocolateDates,
    ramadanHamper
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        <Carousel 
          className="w-full h-full"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => api?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      <button
        onClick={() => api?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center z-10">
        <div className="max-w-2xl text-white">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-5 w-5 text-accent-gold" />
            <span className="text-accent-gold font-medium">Ramadan Special</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
            Luxury Dates & Gourmet Gifts
          </h1>
          
          <p className="text-lg lg:text-xl mb-8 opacity-95">
            Premium dates and artisanal chocolates for Iftar and Eid.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-gold text-accent-foreground group"
              asChild
            >
              <Link to="/collections/ramadan">
                Shop Ramadan Collection
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

          {/* Carousel Indicators */}
          <div className="flex space-x-2 mt-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`h-1 transition-all duration-300 ${
                  current === index ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;