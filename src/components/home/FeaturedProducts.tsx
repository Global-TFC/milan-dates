import { Product } from '@/types/product';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface FeaturedProductsProps {
  products?: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const { t } = useTranslation();
  
  // If no products are passed, use the default featured products
  const featuredProducts = products 
    ? products.filter(p => p.badge === 'Bestseller' || ['1', '3', '5'].includes(p.id))
    : undefined;

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">{t('sections.featured.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('sections.featured.description')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(featuredProducts || []).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="group"
            asChild
          >
            <Link to="/shop">
              {t('common.viewAllProducts')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;