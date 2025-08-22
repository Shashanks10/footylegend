import { Button } from '@/components/ui/button';
import { Play, Star, Calendar, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-stadium.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Epic football stadium"
          className="w-full h-full object-cover transition-transform duration-[20s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-hero-gradient opacity-60 transition-opacity duration-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Relive Football's
            <span className="block text-transparent bg-accent-gradient bg-clip-text animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              Greatest Moments
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Discover legendary matches, iconic goals, and classic jerseys from football history. 
            Experience the beautiful game like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/25">
              <Play className="mr-2 h-5 w-5" />
              Explore Legendary Matches
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              Browse Jersey Collection
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
            <div className="text-center group/stat hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-accent mr-2 group-hover/stat:rotate-12 transition-transform duration-300" />
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">500+</span>
              </div>
              <p className="text-gray-300 group-hover/stat:text-white transition-colors duration-300">Legendary Matches</p>
            </div>
            <div className="text-center group/stat hover:scale-110 transition-all duration-500 cursor-pointer delay-100">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-5 w-5 text-accent mr-2 group-hover/stat:rotate-12 transition-transform duration-300" />
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">1950+</span>
              </div>
              <p className="text-gray-300 group-hover/stat:text-white transition-colors duration-300">Years of History</p>
            </div>
            <div className="text-center group/stat hover:scale-110 transition-all duration-500 cursor-pointer delay-200">
              <div className="flex items-center justify-center mb-2">
                <Play className="h-5 w-5 text-accent mr-2 group-hover/stat:rotate-12 transition-transform duration-300" />
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">1000+</span>
              </div>
              <p className="text-gray-300 group-hover/stat:text-white transition-colors duration-300">Classic Jerseys</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-in fade-in duration-1000 delay-1500">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-accent transition-colors duration-300 cursor-pointer group/scroll">
          <ChevronDown className="w-4 h-4 text-white mt-2 animate-bounce group-hover/scroll:text-accent transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;