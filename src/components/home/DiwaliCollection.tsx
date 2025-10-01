import { diwaliCollection } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Sparkles, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiwaliCollection = () => {
  return (
    <section className="py-16 bg-gradient-festive text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Limited Time Offer</span>
            <Sparkles className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            Diwali Celebration Collection
          </h2>
          
          <p className="max-w-2xl mx-auto text-white/90">
            Make this Diwali extra special with our exclusive festive hampers. 
            Each gift is thoughtfully curated with premium ingredients and presented in elegant packaging.
          </p>
        </div>

        {/* Featured Hamper */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-12 shadow-luxury">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gift className="h-5 w-5" />
                <span className="font-medium">Exclusive Hamper</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-playfair font-bold mb-4">
                Royal Diwali Gift Box
              </h3>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>Premium Medjool Dates (500g)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>Belgian Chocolate Collection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>Assorted Dry Fruits & Nuts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>Traditional Mithai Selection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>Decorative Diya Set</span>
                </li>
              </ul>

              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-3xl font-bold">₹9,999</span>
                <span className="text-xl line-through opacity-75">₹12,999</span>
                <span className="bg-white/20 px-2 py-1 rounded text-sm">Save 23%</span>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-luxury-brown hover:bg-white/90"
                asChild
              >
                <Link to="/collections/diwali">
                  Shop Now
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={diwaliCollection[0]?.image}
                alt="Diwali Hamper"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-accent-gold text-luxury-dark px-3 py-1 rounded-full font-semibold text-sm">
                Limited Stock
              </div>
            </div>
          </div>
        </div>

        {/* More Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diwaliCollection.slice(0, 3).map((product) => (
            <div key={product.id} className="bg-white/10 backdrop-blur rounded-lg p-1">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiwaliCollection;