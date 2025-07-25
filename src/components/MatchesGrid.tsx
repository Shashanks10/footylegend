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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Legendary Football Matches
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the greatest moments in football history. Each match tells a story of triumph, heartbreak, and sporting excellence.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-card rounded-lg p-6 shadow-card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search matches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedTournament} onValueChange={setSelectedTournament}>
              <SelectTrigger>
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
              <SelectTrigger>
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
              <SelectTrigger>
                <SortDesc className="h-4 w-4 mr-2" />
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
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchTerm}
                <button onClick={() => setSearchTerm('')} className="ml-1 hover:bg-muted rounded-full">
                  ×
                </button>
              </Badge>
            )}
            {selectedTournament !== 'all' && (
              <Badge variant="secondary" className="gap-1">
                {selectedTournament}
                <button onClick={() => setSelectedTournament('all')} className="ml-1 hover:bg-muted rounded-full">
                  ×
                </button>
              </Badge>
            )}
            {selectedTag !== 'all' && (
              <Badge variant="secondary" className="gap-1">
                {selectedTag}
                <button onClick={() => setSelectedTag('all')} className="ml-1 hover:bg-muted rounded-full">
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredMatches.length} of {legendaryMatches.length} legendary matches
          </p>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⚽</div>
            <h3 className="text-2xl font-bold mb-2">No matches found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all matches
            </p>
            <Button 
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