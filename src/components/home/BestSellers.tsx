import { bestSellers } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { TrendingUp } from 'lucide-react';

const BestSellers = () => {
  return (
    <section className="py-16 bg-card-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-5 w-5 text-accent" />
            <span className="text-accent font-medium">Customer Favorites</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Best Sellers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These premium products are loved by our customers for their exceptional quality and taste
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;