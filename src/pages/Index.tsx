import HeroBanner from '@/components/home/HeroBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import DiwaliCollection from '@/components/home/DiwaliCollection';
import BestSellers from '@/components/home/BestSellers';
import VideoSection from '@/components/home/VideoSection';

const Index = () => {
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <DiwaliCollection />
      <BestSellers />
      <VideoSection />
    </>
  );
};

export default Index;
