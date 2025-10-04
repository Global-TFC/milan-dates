import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import hamper from '@/assets/hamper.png';
import hero1 from '@/assets/hero1.png';
import hero2 from '@/assets/hero2.png';
import { products } from '@/data/products';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';

// Use specific products for slide text (Ramadan Celebration Hamper, Premium Chocolate Dates, Stuffed Dates Collection)
const slideProducts = [
  products.find((p) => p.id === '3'),
  products.find((p) => p.id === '1'),
  products.find((p) => p.id === '4'),
];

const slides = [
  { src: hamper, product: slideProducts[0], desc: 'Luxurious hampers for the family' },
  { src: hero1, product: slideProducts[1], desc: 'Dubai chocolate dipped dates' },
  { src: hero2, product: slideProducts[2], desc: 'Hand-stuffed premium dates' },
];

const truncate = (s?: string, n = 70) => (s ? (s.length > n ? s.slice(0, n - 3) + '...' : s) : '');

const HeroBanner = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  // Autoplay: advance every 4s
  React.useEffect(() => {
    if (!api) return;

    const id = setInterval(() => {
      try {
        api?.scrollNext();
      } catch (e) {
        // ignore
      }
    }, 4000);

    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      <Carousel className="h-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="h-full">
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="h-full">
              <div
                className="relative h-full bg-cover bg-center min-h-[70vh] lg:min-h-[80vh]"
                style={{ backgroundImage: `url(${slide.src})` }}
                role="img"
                aria-label={slide.product?.name ?? 'Hero image'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex items-center px-10">
                  <div className="max-w-xl text-white text-left">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-2">{truncate(slide.product?.name, 40) ?? 'Ramadan Gifts'}</h1>
                    <p className="mb-4 text-sm">{slide.desc ?? truncate(slide.product?.description, 80) ?? 'Curated hampers and premium dates.'}</p>
                    <div className="flex gap-3">
                      <Link to={'/shop'}>
                        <Button className="px-3 py-2 text-sm bg-transparent border  border-white text-white hover:bg-white/10">
                          Show Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious aria-label="Previous slide" />
        <CarouselNext aria-label="Next slide" />
      </Carousel>
    </section>
  );
};

export default HeroBanner;