import { Button } from '@/components/ui/button';
import { Play, Star, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-stadium.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Epic football stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-hero-gradient opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Relive Football's
            <span className="block text-transparent bg-accent-gradient bg-clip-text">
              Greatest Moments
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover legendary matches, iconic goals, and classic jerseys from football history. 
            Experience the beautiful game like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Explore Legendary Matches
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Browse Jersey Collection
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-accent mr-2" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-gray-300">Legendary Matches</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-5 w-5 text-accent mr-2" />
                <span className="text-3xl font-bold">1950+</span>
              </div>
              <p className="text-gray-300">Years of History</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Play className="h-5 w-5 text-accent mr-2" />
                <span className="text-3xl font-bold">1000+</span>
              </div>
              <p className="text-gray-300">Classic Jerseys</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;