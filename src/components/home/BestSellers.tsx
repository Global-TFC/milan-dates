import { Product } from '@/types/product';
import ProductCard from '@/components/product/ProductCard';
import { TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { bestSellers as defaultBestSellers } from '@/data/products';

interface BestSellersProps {
  products?: Product[];
}

const BestSellers = ({ products }: BestSellersProps) => {
  const { t } = useTranslation();
  
  // Use passed products or default best sellers
  const bestSellers = products 
    ? products.filter(p => p.badge === 'Bestseller' || ['1', '3', '5'].includes(p.id))
    : defaultBestSellers;
  
  return (
    <section className="py-8 bg-card-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-5 w-5 text-accent" />
            <span className="text-accent font-medium">{t('sections.bestSellers.subtitle')}</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">{t('sections.bestSellers.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('sections.bestSellers.description')}
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