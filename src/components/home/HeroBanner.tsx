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
        role="img"
        aria-label="Premium Arabian dates arranged beautifully for Ramadan celebration"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;