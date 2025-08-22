import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Legendary Matches', href: '/' },
    { name: 'Jersey Store', href: '/store' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-all duration-300 hover:shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/25">
              <span className="text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform duration-300">⚽</span>
            </div>
            <span className="font-bold text-xl text-primary group-hover:text-accent transition-colors duration-300">
              Football Legends
              <Sparkles className="inline-block w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative group/nav ${
                  isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover/nav:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
              <Input
                placeholder="Search matches or jerseys..."
                className="pl-10 w-64 focus:w-72 transition-all duration-300 focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative group hover:scale-110 transition-all duration-300">
              <ShoppingCart className="h-5 w-5 group-hover:text-accent transition-colors duration-300" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-accent text-accent-foreground rounded-full text-xs flex items-center justify-center group-hover:scale-110 group-hover:animate-pulse transition-all duration-300">
                0
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-110 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-5 w-5 rotate-90 transition-transform duration-300" /> : 
              <Menu className="h-5 w-5 hover:rotate-90 transition-transform duration-300" />
            }
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:text-primary hover:bg-muted/50 rounded-md hover:translate-x-2 ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                  <Input
                    placeholder="Search..."
                    className="pl-10 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;