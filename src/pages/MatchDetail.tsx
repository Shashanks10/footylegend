import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Play, Calendar, MapPin, Trophy, Users, Target, AlertTriangle, Zap } from 'lucide-react';
import { legendaryMatches } from '@/data/matches';
import Header from '@/components/Header';

const MatchDetail = () => {
  const { id } = useParams();
  const match = legendaryMatches.find(m => m.id === id);

  if (!match) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Match Not Found</h1>
          <p className="text-muted-foreground mb-8">The match you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Matches
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={match.image}
          alt={match.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-hero-gradient opacity-40" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Button asChild variant="ghost" className="text-white mb-4 hover:bg-white/20">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Matches
                </Link>
              </Button>
              
              <Badge className="mb-4 bg-primary/90 text-primary-foreground">
                <Trophy className="h-3 w-3 mr-1" />
                {match.tournament}
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {match.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {match.date}
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {match.stats.attendance.toLocaleString()} fans
                </div>
                <div className="text-2xl font-bold text-accent">
                  {match.score}
                </div>
              </div>
              
              <p className="text-xl text-gray-200 max-w-2xl">
                {match.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Video Highlights */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="h-5 w-5 mr-2 text-primary" />
                  Video Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {match.videoHighlights.map((video, index) => (
                    <div key={index} className="relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer hover:shadow-glow transition-shadow">
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-8 w-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-medium">{video}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Major Incidents */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-accent" />
                  Key Moments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {match.incidents.map((incident, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-card-foreground">{incident}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Historical Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed text-lg">
                  {match.impact}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Match Statistics */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Match Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Goals Scored</span>
                  <span className="font-bold text-lg">{match.stats.goals}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Yellow Cards</span>
                  <span className="font-bold text-lg text-yellow-500">{match.stats.yellowCards}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Red Cards</span>
                  <span className="font-bold text-lg text-red-500">{match.stats.redCards}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Assists</span>
                  <span className="font-bold text-lg">{match.stats.assists}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Attendance</span>
                  <span className="font-bold text-lg">{match.stats.attendance.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Match Tags */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {match.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Matches */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>More Legendary Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {legendaryMatches
                    .filter(m => m.id !== match.id)
                    .slice(0, 3)
                    .map((relatedMatch) => (
                      <Link 
                        key={relatedMatch.id} 
                        to={`/match/${relatedMatch.id}`}
                        className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {relatedMatch.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {relatedMatch.teams} • {relatedMatch.date}
                        </p>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetail;