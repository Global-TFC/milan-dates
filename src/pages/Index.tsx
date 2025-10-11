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
      {loading && <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8 animate-pulse">

          <div className="h-8 w-64 bg-gray-300 rounded mb-4"></div>

          <div className="h-4 w-96 bg-gray-200 rounded mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mb-4"></div>
              <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </div>

            <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mb-4"></div>
              <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </div>

            <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mb-4"></div>
              <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

      </>}

      {loading && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-800 to-amber-400 p-10 animate-pulse">

          {/* Title and description */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="h-6 w-64 bg-white/40 rounded mb-4"></div>
            <div className="h-4 w-96 bg-white/30 rounded"></div>
          </div>

          {/* Content layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full bg-white/10 p-8 rounded-2xl shadow-md">

            {/* Left side (text area skeletons) */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="h-5 w-40 bg-white/40 rounded"></div>
              <div className="h-8 w-80 bg-white/60 rounded"></div>
              <div className="space-y-3 mt-6">
                <div className="h-3 w-64 bg-white/30 rounded"></div>
                <div className="h-3 w-60 bg-white/30 rounded"></div>
                <div className="h-3 w-56 bg-white/30 rounded"></div>
                <div className="h-3 w-52 bg-white/30 rounded"></div>
              </div>
              <div className="h-10 w-32 bg-white/50 rounded mt-8"></div>
            </div>

            {/* Right side (image placeholder) */}
            <div className="flex-1">
              <div className="w-full aspect-[4/3] bg-white/30 rounded-2xl"></div>
            </div>

          </div>
        </div>
      )}


      {!loading && <FeaturedProducts products={products} />}
      {!loading && <RamadanCollection products={products} />}
      {!loading && <BestSellers products={products} />}
      <VideoSection />
      <MapSection />
    </>
  );
};

export default Index;