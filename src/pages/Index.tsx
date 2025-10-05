import { useEffect, useState } from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import RamadanCollection from '@/components/home/RamadanCollection';
import BestSellers from '@/components/home/BestSellers';
import VideoSection from '@/components/home/VideoSection';
import MapSection from '@/components/home/MapSection';
import SEO from '@/components/SEO';
import { getProductsData } from '@/data/products';
import { Product } from '@/types/product';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await getProductsData();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);
  
  return (
    <>
      <SEO 
        title={isArabic ? "تمور فاخرة وهدايا فاخرة" : "Luxury Gourmet Dates & Premium Gifts"}
        description={isArabic ? "اكتشف أجود التمور الفاخرة والشوكولاتة الفنية وسلال الهدايا الفاخرة. مثالية للاحتفالات والهدايا المؤسسية." : "Discover the world's finest gourmet dates, artisanal chocolates, and luxury gift hampers. Perfect for Diwali celebrations and corporate gifting."}
        keywords={isArabic ? "تمور فاخرة، تمور فاخرة، تمور عربية، هدايا رمضان، هدايا ديوالي، شوكولاتة فاخرة، هدايا مؤسسية، سلال هدايا" : "luxury dates, gourmet dates, Arabian dates, Ramadan gifts, Diwali gifts, premium chocolates, corporate gifts, gift hampers"}
      />
      <HeroBanner />
      {!loading && <FeaturedProducts products={products} />}
      {!loading && <RamadanCollection products={products} />}
      {!loading && <BestSellers products={products} />}
      <VideoSection />
      <MapSection />
    </>
  );
};

export default Index;