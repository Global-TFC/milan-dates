import { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Heart, Share2, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslation } from 'react-i18next';
import { formatPrice } from '@/lib/currency';

interface ProductQuickViewProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

const ProductQuickView: React.FC<ProductQuickViewProps> = ({ product, open, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]?.label || '');
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const currentLanguage = i18n.language;
  
  // Get the appropriate price based on language
  const currentPrice = isArabic && product.price_ar ? product.price_ar : product.price;
  const currentOriginalPrice = isArabic && product.originalPrice_ar ? product.originalPrice_ar : product.originalPrice;
  
  // Get selected size price
  const selectedSizeObj = product.sizes?.find(s => s.label === selectedSize);
  const selectedPrice = selectedSizeObj 
    ? (isArabic && selectedSizeObj.price_ar ? selectedSizeObj.price_ar : selectedSizeObj.price)
    : currentPrice;

  const handleAddToCart = () => {
    // Create a product object with the correct price for the selected language
    const productWithPrice = {
      ...product,
      price: selectedPrice,
      // Include the selected size in the product data for the cart
      selectedSize: selectedSize
    };
    
    addToCart(productWithPrice, quantity);
    onClose();
    setQuantity(1);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="sr-only">{isArabic ? product.name_ar : product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={isArabic ? product.name_ar : product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                {product.badge}
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h2 className="text-2xl font-playfair font-bold mb-3">{isArabic ? product.name_ar : product.name}</h2>
              
              <div className="flex items-baseline space-x-3 mb-4">
                <span className="text-2xl font-bold text-accent">
                  {formatPrice(selectedPrice, currentLanguage)}
                </span>
                {currentOriginalPrice && selectedPrice !== currentOriginalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(currentOriginalPrice, currentLanguage)}
                  </span>
                )}
                {product.weight && (
                  <span className="text-sm text-muted-foreground">({isArabic ? (product.sizes?.find(s => s.label === selectedSize)?.label_ar || product.weight) : product.weight})</span>
                )}
              </div>

              <p className="text-muted-foreground mb-6">{isArabic ? product.description_ar : product.description}</p>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">{t('common.size')}</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => {
                        const sizePrice = isArabic && size.price_ar ? size.price_ar : size.price;
                        return (
                          <SelectItem key={size.label} value={size.label}>
                            {isArabic ? size.label_ar : size.label} - {formatPrice(sizePrice, currentLanguage)}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">{t('common.quantity')}</label>
                <div className="flex items-center space-x-3">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-luxury text-primary-foreground" 
                size="lg"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                {t('common.addToCart')}
              </Button>
              
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  {t('common.wishlist')}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={async () => {
                    const shareUrl = `https://milandates.com/shop`;

                    // Try native share
                    const navShare = (navigator as unknown) as Navigator & { share?: (data: ShareData) => Promise<void> };
                    if (navShare.share) {
                      try {
                        await navShare.share({
                          title: isArabic ? product.name_ar || product.name : product.name,
                          text: isArabic ? product.description_ar || product.description : product.description,
                          url: shareUrl,
                        });
                        return;
                      } catch (e) {
                        // user cancelled or failed — fallback below
                      }
                    }

                    // Fallback: open share options in new windows (WhatsApp, Twitter)
                    const encoded = encodeURIComponent(`${isArabic ? product.name_ar || product.name : product.name} - ${shareUrl}`);
                    const whatsapp = `https://wa.me/?text=${encoded}`;
                    const twitter = `https://twitter.com/intent/tweet?text=${encoded}`;
                    const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

                    // Show a toast with options and copy to clipboard
                    try {
                      await navigator.clipboard.writeText(shareUrl);
                      toast({ title: isArabic ? 'تم النسخ' : 'Link copied', description: isArabic ? 'تم نسخ رابط المتجر إلى الحافظة' : 'Shop link copied to clipboard' });
                    } catch (err) {
                      toast({ title: isArabic ? 'فشل النسخ' : 'Copy failed', description: isArabic ? 'تعذر نسخ الرابط إلى الحافظة' : 'Could not copy link to clipboard' });
                    }

                    // Open WhatsApp and Twitter in new tabs as quick actions
                    window.open(whatsapp, '_blank');
                    window.open(twitter, '_blank');
                    // Optionally open Facebook
                    // window.open(facebook, '_blank');
                  }}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  {t('common.share')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;