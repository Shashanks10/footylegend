import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Star, Filter, Grid, List } from 'lucide-react';
import { jerseyCollection, Jersey } from '@/data/jerseys';
import Header from '@/components/Header';
import jerseyHero from '@/assets/jersey-collection.jpg';

const JerseyStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [cart, setCart] = useState<{[key: string]: number}>({});

  // Get unique teams and categories
  const teams = Array.from(new Set(jerseyCollection.map(jersey => jersey.team)));
  const categories = Array.from(new Set(jerseyCollection.map(jersey => jersey.category)));

  // Filter and sort jerseys
  const filteredJerseys = jerseyCollection
    .filter((jersey) => {
      const matchesSearch = jersey.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           jersey.team.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || jersey.category === selectedCategory;
      const matchesTeam = selectedTeam === 'all' || jersey.team === selectedTeam;
      
      return matchesSearch && matchesCategory && matchesTeam;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'popularity':
          return b.popularity - a.popularity;
        case 'year':
          return parseInt(b.year.slice(-4)) - parseInt(a.year.slice(-4));
        default:
          return 0;
      }
    });

  const addToCart = (jerseyId: string) => {
    setCart(prev => ({
      ...prev,
      [jerseyId]: (prev[jerseyId] || 0) + 1
    }));
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const JerseyCard = ({ jersey }: { jersey: Jersey }) => (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card-gradient">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={jersey.image}
          alt={jersey.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {!jersey.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              Out of Stock
            </Badge>
          </div>
        )}

        {jersey.originalPrice && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
            Sale
          </Badge>
        )}

        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-black/50 rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-yellow-400 mr-1" />
            <span className="text-white text-xs">{jersey.popularity}/100</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs mb-2">
            {jersey.category.charAt(0).toUpperCase() + jersey.category.slice(1)}
          </Badge>
        </div>
        
        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
          {jersey.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-2">{jersey.team}</p>
        <p className="text-muted-foreground text-sm mb-4">{jersey.year}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">${jersey.price}</span>
            {jersey.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${jersey.originalPrice}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Button 
            className="w-full" 
            onClick={() => addToCart(jersey.id)}
            disabled={!jersey.inStock}
            variant={jersey.inStock ? "default" : "outline"}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {jersey.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
          
          <p className="text-xs text-muted-foreground">
            Available sizes: {jersey.size.join(', ')}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={jerseyHero}
          alt="Jersey Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-hero-gradient opacity-40" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Classic Football
              <span className="block text-transparent bg-accent-gradient bg-clip-text">
                Jersey Collection
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Own a piece of football history with our authentic collection of classic and modern jerseys from legendary teams and players.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Badge className="bg-primary/90 text-primary-foreground text-lg px-4 py-2">
                {jerseyCollection.filter(j => j.inStock).length} jerseys in stock
              </Badge>
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                Authentic designs
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Store Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Filters and Controls */}
        <div className="bg-card rounded-lg p-6 shadow-card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jerseys..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedTeam} onValueChange={setSelectedTeam}>
              <SelectTrigger>
                <SelectValue placeholder="Team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                {teams.map((team) => (
                  <SelectItem key={team} value={team}>
                    {team}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="year">Newest First</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {searchTerm && (
              <Badge variant="secondary">Search: {searchTerm}</Badge>
            )}
            {selectedCategory !== 'all' && (
              <Badge variant="secondary">{selectedCategory}</Badge>
            )}
            {selectedTeam !== 'all' && (
              <Badge variant="secondary">{selectedTeam}</Badge>
            )}
          </div>

          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">
              Showing {filteredJerseys.length} of {jerseyCollection.length} jerseys
            </p>
            <Button variant="outline" className="relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart ({getTotalCartItems()})
            </Button>
          </div>
        </div>

        {/* Jersey Grid */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
        }>
          {filteredJerseys.map((jersey) => (
            <JerseyCard key={jersey.id} jersey={jersey} />
          ))}
        </div>

        {filteredJerseys.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👕</div>
            <h3 className="text-2xl font-bold mb-2">No jerseys found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all jerseys
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedTeam('all');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JerseyStore;