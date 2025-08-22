import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, SortDesc } from 'lucide-react';
import MatchCard from './MatchCard';
import { legendaryMatches, Match } from '@/data/matches';

const MatchesGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTournament, setSelectedTournament] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Get unique tournaments and tags
  const tournaments = Array.from(new Set(legendaryMatches.map(match => match.tournament)));
  const allTags = Array.from(new Set(legendaryMatches.flatMap(match => match.tags)));

  // Filter and sort matches
  const filteredMatches = legendaryMatches
    .filter((match) => {
      const matchesSearch = match.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           match.teams.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           match.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTournament = selectedTournament === 'all' || match.tournament === selectedTournament;
      const matchesTag = selectedTag === 'all' || match.tags.includes(selectedTag);
      
      return matchesSearch && matchesTournament && matchesTag;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'goals':
          return b.stats.goals - a.stats.goals;
        case 'attendance':
          return b.stats.attendance - a.stats.attendance;
        default:
          return 0;
      }
    });

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-in fade-in slide-in-from-bottom-8' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Legendary Football Matches
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
            Explore the greatest moments in football history. Each match tells a story of triumph, heartbreak, and sporting excellence.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className={`bg-card rounded-lg p-6 shadow-card mb-8 transition-all duration-1000 delay-300 hover:shadow-elegant hover:scale-[1.02] ${isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors duration-300 peer-focus:text-primary" />
              <Input
                placeholder="Search matches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 peer focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
              />
            </div>
            
            <Select value={selectedTournament} onValueChange={setSelectedTournament}>
              <SelectTrigger className="hover:border-primary/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                <SelectValue placeholder="Tournament" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tournaments</SelectItem>
                {tournaments.map((tournament) => (
                  <SelectItem key={tournament} value={tournament}>
                    {tournament}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="hover:border-primary/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="hover:border-primary/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                <SortDesc className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-180" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="goals">Goals Scored</SelectItem>
                <SelectItem value="attendance">Attendance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 animate-in fade-in duration-500">
            {searchTerm && (
              <Badge variant="secondary" className="gap-1 hover:scale-110 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-left-2">
                Search: {searchTerm}
                <button onClick={() => setSearchTerm('')} className="ml-1 hover:bg-muted rounded-full hover:scale-125 transition-all duration-200">
                  ×
                </button>
              </Badge>
            )}
            {selectedTournament !== 'all' && (
              <Badge variant="secondary" className="gap-1 hover:scale-110 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-left-2 delay-100">
                {selectedTournament}
                <button onClick={() => setSelectedTournament('all')} className="ml-1 hover:bg-muted rounded-full hover:scale-125 transition-all duration-200">
                  ×
                </button>
              </Badge>
            )}
            {selectedTag !== 'all' && (
              <Badge variant="secondary" className="gap-1 hover:scale-110 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-left-2 delay-200">
                {selectedTag}
                <button onClick={() => setSelectedTag('all')} className="ml-1 hover:bg-muted rounded-full hover:scale-125 transition-all duration-200">
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className={`mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'animate-in fade-in slide-in-from-left-4' : 'opacity-0'}`}>
          <p className="text-muted-foreground">
            Showing {filteredMatches.length} of {legendaryMatches.length} legendary matches
          </p>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMatches.map((match, index) => (
            <div 
              key={match.id} 
              className={`transition-all duration-700 ${isVisible ? 'animate-in fade-in slide-in-from-bottom-8' : 'opacity-0'}`}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="text-6xl mb-4 animate-bounce">⚽</div>
            <h3 className="text-2xl font-bold mb-2">No matches found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all matches
            </p>
            <Button 
              className="hover:scale-105 transition-all duration-300"
              onClick={() => {
                setSearchTerm('');
                setSelectedTournament('all');
                setSelectedTag('all');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MatchesGrid;