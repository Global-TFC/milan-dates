import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import heroDates from '@/assets/hero-dates.jpg';
import ramadanHamper from '@/assets/ramadan-hamper.jpg';
import chocolateDates from '@/assets/chocolate-dates.jpg';
import stuffedDates from '@/assets/stuffed-dates.jpg';

const slides = [
  {
    image: ramadanHamper,
    title: 'The Mira Hamper',
    description: 'A thoughtful blend of taste and elegance.',
    alt: 'Luxury Ramadan hamper with premium dates and artisanal products'
  },
  {
    image: chocolateDates,
    title: 'Chocolate Dates Collection',
    description: 'Indulge in our finest chocolate-covered dates.',
    alt: 'Premium chocolate-covered dates collection'
  },
  {
    image: stuffedDates,
    title: 'Stuffed Dates Delight',
    description: 'Artisanal stuffed dates with exotic fillings.',
    alt: 'Gourmet stuffed dates with premium ingredients'
  },
  {
    image: heroDates,
    title: 'Arabian Dates Premium',
    description: 'The finest selection of Arabian dates.',
    alt: 'Premium Arabian dates collection'
  }
];

const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="h-full w-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                role="img"
                aria-label={slide.alt}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <h2 className="text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
                    {slide.title}
                  </h2>
                  
                  <p className="text-xl lg:text-2xl mb-8 opacity-95 font-light">
                    {slide.description}
                  </p>

                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all"
                    asChild
                  >
                    <Link to="/shop">
                      Explore All
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20" />
        <CarouselNext className="right-4 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20" />
      </Carousel>
    </section>
  );
};

export default HeroBanner;