import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Eye } from 'lucide-react';
import { useState } from 'react';
import ProductQuickView from './ProductQuickView';
import { useTranslation } from 'react-i18next';
import { formatPrice } from '@/lib/currency';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const currentLanguage = i18n.language;

  // Get the appropriate price based on language
  const currentPrice = isArabic && product.price_ar ? product.price_ar : product.price;
  const currentOriginalPrice = isArabic && product.originalPrice_ar ? product.originalPrice_ar : product.originalPrice;

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-luxury transition-all duration-300 bg-card border-border">
        <CardContent className="p-0">
          <div className="relative overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={isArabic ? product.name_ar : product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {product.badge && (
              <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                {product.badge}
              </Badge>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 md:transition-opacity duration-300" />
            
            {/* Quick Actions - Always visible on mobile, hover on desktop */}
            <div className="absolute bottom-3 left-3 right-3 flex space-x-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-y-2 md:group-hover:translate-y-0">
              <Button
                size="sm"
                className="flex-1 bg-background/90 backdrop-blur text-foreground hover:bg-background text-xs sm:text-sm"
                onClick={() => setQuickViewOpen(true)}
              >
                <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="hidden sm:inline">{isArabic ? 'عرض سريع' : 'Quick View'}</span>
                <span className="sm:hidden">{isArabic ? 'عرض' : 'View'}</span>
              </Button>
              <Button
                size="sm"
                variant="default"
                className="flex-1 bg-accent hover:bg-accent-gold text-accent-foreground text-xs sm:text-sm"
                onClick={() => addToCart(product)}
              >
                <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="hidden sm:inline">{isArabic ? 'أضف إلى السلة' : 'Add to Cart'}</span>
                <span className="sm:hidden">{isArabic ? 'أضف' : 'Add'}</span>
              </Button>
            </div>
          </div>

          <div className="p-4">
            <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
            <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{isArabic ? product.name_ar : product.name}</h3>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-accent">
                  {formatPrice(currentPrice, currentLanguage)}
                </span>
                {currentOriginalPrice && (
                  <span className={`text-sm text-muted-foreground line-through ${isArabic ? 'mr-2' : 'ml-2'}`}>
                    {formatPrice(currentOriginalPrice, currentLanguage)}
                  </span>
                )}
              </div>
              {product.weight && (
                <span className="text-xs text-muted-foreground">{isArabic ? (product.sizes?.[0]?.label_ar || product.weight) : product.weight}</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <ProductQuickView
        product={product}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
};

export default ProductCard;