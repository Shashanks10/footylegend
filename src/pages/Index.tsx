import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MatchesGrid from '@/components/MatchesGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MatchesGrid />
    </div>
  );
};

export default Index;
