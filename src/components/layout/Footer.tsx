import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const isArabic = i18n.language === 'ar';
  
  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              {t('common.brandName')}
            </h3>
            <p className={`text-sm opacity-90 mb-4 ${isArabic ? 'text-right' : ''}`}>
              {isArabic 
                ? 'المنتج الوحيد في العالم المتخصص في زراعة وتصنيع وبيع التمور الفاخرة. نخلق لحظات فرح من خلال منتجاتنا الاستثنائية.' 
                : 'The world\'s only gourmet date grower, producer and seller. Creating moments of joy through exceptional products.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  {t('footer.links.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  {t('footer.links.shop')}
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/ramadan"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  {t('footer.links.ramadan')}
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  {t('footer.links.corporate')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.customerService')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/shipping"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  {t('footer.links.shipping')}
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  {t('footer.links.returns')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  {t('footer.links.terms')}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  {t('footer.links.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-3 text-sm">
              <li className={`flex items-start ${isArabic ? 'space-x-reverse' : 'space-x-2'}`}>
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Rashidi+station/@25.5245514,39.3385124,17z/data=!4m6!3m5!1s0x15a2d596802cf4ed:0xc743f983c9c47ed7!8m2!3d25.5245716!4d39.3386289!16s%2Fg%2F11c1ph63j9?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  {isArabic 
                    ? 'محطة الراشدي\nG8FQ+RFC، الثماد 43831، المملكة العربية السعودية' 
                    : 'Rashidi station\nG8FQ+RFC, Al Thamad 43831, Saudi Arabia'}
                </a>
              </li>
              <li className={`flex items-center ${isArabic ? 'space-x-reverse' : 'space-x-2'}`}>
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className={`flex items-center ${isArabic ? 'space-x-reverse' : 'space-x-2'}`}>
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">info@milandates.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>{isArabic 
            ? `©${year} ${t('common.brandName')}. ${t('footer.rights')}` 
            : `©${year} ${t('common.brandName')}. ${t('footer.rights')}`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;