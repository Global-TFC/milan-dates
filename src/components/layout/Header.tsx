import { Menu, Search, ShoppingBag, User, ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import CartDrawer from '@/components/cart/CartDrawer';
import { formatPrice } from '@/lib/currency';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    items,
    cartCount,
    cartTotal,
    setIsCartOpen
  } = useCart();
  
  const isArabic = i18n.language === 'ar';
  const currentLanguage = i18n.language;

  const navigationItems = [{
    title: t('nav.shop'),
    items: [{
      name: t('nav.menu.allProducts'),
      href: '/shop'
    }, {
      name: t('nav.menu.dates'),
      href: '/shop/dates'
    }, {
      name: t('nav.menu.chocolates'),
      href: '/shop/chocolates'
    }, {
      name: t('nav.menu.honey'),
      href: '/shop/honey'
    }, {
      name: t('nav.menu.giftHampers'),
      href: '/shop/hampers'
    }]
  }, {
    title: t('nav.menu.festiveCollections'),
    items: [{
      name: t('nav.menu.ramadanSpecial'),
      href: '/collections/ramadan'
    }, {
      name: t('nav.menu.weddingGifts'),
      href: '/collections/wedding'
    }, {
      name: t('nav.menu.corporateGifts'),
      href: '/collections/corporate'
    }]
  }, {
    title: t('nav.menu.worldOf'),
    items: [{
      name: t('nav.ourStory'),
      href: '/our-story'
    }, {
      name: t('nav.craftsmanship'),
      href: '/craftsmanship'
    }]
  }];
  
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

  return <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-b border-border">
        {/* Top Bar */}
        <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
          <p>{t('promo.ramadan.title')}</p>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-primary">{t('common.brandName')}</h1>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                {navigationItems.map(item => <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="bg-transparent">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {item.items.map(subItem => <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link to={subItem.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>)}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>)}
                <NavigationMenuItem>
                  <a href="#footer" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                    {t('nav.contactUs')}
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4">
              {navigationItems.map(item => <div key={item.title} className="mb-4">
                  <h3 className="font-semibold mb-2 flex items-center">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </h3>
                  <ul className="ml-4 space-y-2">
                    {item.items.map(subItem => <li key={subItem.name}>
                        <Link to={subItem.href} className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                          {subItem.name}
                        </Link>
                      </li>)}
                  </ul>
                </div>)}
              <a href="#footer" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                {t('nav.contactUs')}
              </a>
            </div>
          </div>}
      </header>
      
      {/* Mobile Cart Bar - Fixed at bottom for mobile devices */}
      {cartCount > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 p-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Cart Icon */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Button>
            
            {/* Cart View - Opens Cart Drawer */}
            <Button 
              variant="outline" 
              className="flex-1 mx-2"
              onClick={() => setIsCartOpen(true)}
            >
              {isArabic ? 'ميلان ديت سلة التسوق' : 'Milan Dates Cart'} ({cartCount})
            </Button>
            
            {/* Checkout Button - Redirects to WhatsApp */}
            <Button 
              className="bg-gradient-luxury text-primary-foreground flex items-center"
              onClick={handleWhatsAppCheckout}
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              {isArabic ? 'شراء' : 'Checkout'}
            </Button>
          </div>
        </div>
      )}
      
      <CartDrawer />
    </>;
};

export default Header;