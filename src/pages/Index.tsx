import HeroBanner from '@/components/home/HeroBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import RamadanCollection from '@/components/home/RamadanCollection';
import BestSellers from '@/components/home/BestSellers';
import VideoSection from '@/components/home/VideoSection';

const Index = () => {
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <RamadanCollection />
      <BestSellers />
      <VideoSection />
    </>
  );
};

export default Index;
