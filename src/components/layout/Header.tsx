import { Menu, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import CartDrawer from '@/components/cart/CartDrawer';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    cartCount,
    setIsCartOpen
  } = useCart();
  const navigationItems = [{
    title: 'Shop',
    items: [{
      name: 'All Products',
      href: '/shop'
    }, {
      name: 'Dates',
      href: '/shop/dates'
    }, {
      name: 'Chocolates',
      href: '/shop/chocolates'
    }, {
      name: 'Honey',
      href: '/shop/honey'
    }, {
      name: 'Gift Hampers',
      href: '/shop/hampers'
    }]
  }, {
    title: 'Festive Collections',
    items: [{
      name: 'Ramadan Special',
      href: '/collections/ramadan'
    }, {
      name: 'Wedding Gifts',
      href: '/collections/wedding'
    }, {
      name: 'Corporate Gifts',
      href: '/collections/corporate'
    }]
  }, {
    title: 'World of MilanDates',
    items: [{
      name: 'Our Story',
      href: '/about'
    }, {
      name: 'Craftsmanship',
      href: '/craftsmanship'
    }, {
      name: 'Sustainability',
      href: '/sustainability'
    }]
  }];
  return <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-b border-border">
        {/* Top Bar */}
        <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
          <p>✨ Ramadan Special: Get 20% off on all gift hampers | Free shipping above ₹2,999</p>
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
              <h1 className="text-2xl font-playfair font-bold text-primary">MilanDates</h1>
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
                  <Link to="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              
              
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
              <Link to="/contact" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>}
      </header>
      
      <CartDrawer />
    </>;
};
export default Header;