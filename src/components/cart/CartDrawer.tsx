import { X, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';
import { formatPrice } from '@/lib/currency';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const currentLanguage = i18n.language;

  const handleWhatsAppCheckout = () => {
    // Format cart items for WhatsApp message
    let message = isArabic ? '🛒 *طلب شراء*\n\n' : '🛒 *Order Request*\n\n';
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${isArabic ? (item.name_ar || item.name) : item.name}*\n`;
      if (item.selectedSize) {
        const sizeLabel = isArabic 
          ? (item.sizes?.find(s => s.label === item.selectedSize)?.label_ar || item.selectedSize) 
          : item.selectedSize;
        message += `   ${isArabic ? 'الحجم:' : 'Size:'} ${sizeLabel}\n`;
      }
      message += `   ${isArabic ? 'الكمية:' : 'Quantity:'} ${item.quantity}\n`;
      message += `   ${isArabic ? 'السعر:' : 'Price:'} ${formatPrice(item.price, currentLanguage)} ${isArabic ? 'لكل قطعة' : 'each'}\n`;
      message += `   ${isArabic ? 'الإجمالي الفرعي:' : 'Subtotal:'} ${formatPrice(item.price * item.quantity, currentLanguage)}\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━\n`;
    message += `*${isArabic ? 'الإجمالي:' : 'Total:'} ${formatPrice(cartTotal, currentLanguage)}*\n\n`;
    message += isArabic ? 'يرجى تأكيد التوفر وتفاصيل التسليم.' : 'Please confirm availability and delivery details.';
    
    // Replace with your business WhatsApp number (without + or spaces)
    const whatsappNumber = '919999999999'; // Example: 919999999999 for India
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <span>{isArabic ? 'سلة التسوق' : 'Shopping Cart'} ({items.length})</span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg mb-2">{isArabic ? 'سلة التسوق فارغة' : 'Your cart is empty'}</h3>
            <p className="text-muted-foreground mb-4">{isArabic ? 'أضف بعض العناصر الفاخرة للبدء' : 'Add some luxury items to get started'}</p>
            <Button onClick={() => setIsCartOpen(false)}>{t('cart.continue')}</Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 my-4 h-[calc(100vh-300px)]">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-4 p-4 bg-card rounded-lg shadow-soft">
                    <img
                      src={item.image}
                      alt={isArabic ? (item.name_ar || item.name) : item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{isArabic ? (item.name_ar || item.name) : item.name}</h4>
                      {item.selectedSize && (
                        <p className="text-xs text-muted-foreground">
                          {isArabic ? 'الحجم:' : 'Size:'} {isArabic 
                            ? (item.sizes?.find(s => s.label === item.selectedSize)?.label_ar || item.selectedSize) 
                            : item.selectedSize}
                        </p>
                      )}
                      <p className="text-accent font-semibold mt-1">{formatPrice(item.price, currentLanguage)}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <Separator />

            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between w-full px-1">
                <span className="text-lg font-semibold">{isArabic ? 'الإجمالي' : 'Total'}</span>
                <span className="text-lg font-semibold">{formatPrice(cartTotal, currentLanguage)}</span>
              </div>
              
              <Button 
                className="w-full bg-gradient-luxury text-primary-foreground" 
                size="lg"
                onClick={handleWhatsAppCheckout}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {isArabic ? 'طلب عبر واتساب' : 'Order via WhatsApp'}
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => setIsCartOpen(false)}
              >
                {t('cart.continue')}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;