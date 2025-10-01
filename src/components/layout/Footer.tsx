import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Bateel</h3>
            <p className="text-sm opacity-90 mb-4">
              The world's only gourmet date grower, producer and seller. Creating moments of joy through exceptional products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/collections/diwali" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  Diwali Collection
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  Corporate Gifts
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  Franchise
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shipping" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  Returns & Exchange
                </Link>
              </li>
              <li>
                <Link to="/terms" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/careers" className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  123 Luxury Avenue, Mumbai, Maharashtra 400001, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">info@bateel.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; 2024 Bateel. All rights reserved. | Made with love in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;