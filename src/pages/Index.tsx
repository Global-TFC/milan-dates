import HeroBanner from '@/components/home/HeroBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import RamadanCollection from '@/components/home/RamadanCollection';
import BestSellers from '@/components/home/BestSellers';
import VideoSection from '@/components/home/VideoSection';
import MapSection from '@/components/home/MapSection';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <>
      <SEO 
        title="Luxury Gourmet Dates & Premium Gifts"
        description="Discover the world's finest gourmet dates, artisanal chocolates, and luxury gift hampers. Perfect for Diwali celebrations and corporate gifting."
        keywords="luxury dates, gourmet dates, Arabian dates, Ramadan gifts, Diwali gifts, premium chocolates, corporate gifts, gift hampers"
      />
      <HeroBanner />
      <FeaturedProducts />
      <RamadanCollection />
      <BestSellers />
      <VideoSection />
      <MapSection />
    </>
  );
};

export default Index;
