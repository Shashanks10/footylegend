import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy, Users } from 'lucide-react';
import { Match } from '@/data/matches';
import { Link } from 'react-router-dom';

interface MatchCardProps {
  match: Match;
}

const MatchCard = ({ match }: MatchCardProps) => {
  return (
    <Link to={`/match/${match.id}`} className="group block">
      <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 group-hover:scale-105 bg-card-gradient">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={match.image}
            alt={match.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Match Score Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{match.teams}</h3>
                <p className="text-gray-200 text-sm">{match.date}</p>
              </div>
              <div className="text-right">
                <div className="text-accent text-2xl font-bold">{match.score}</div>
              </div>
            </div>
          </div>

          {/* Tournament Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
              <Trophy className="h-3 w-3 mr-1" />
              {match.tournament}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6">
          <h4 className="font-bold text-xl mb-2 text-card-foreground group-hover:text-primary transition-colors">
            {match.title}
          </h4>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {match.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-2" />
              <span>{match.stats.attendance.toLocaleString()} attendance</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{match.stats.goals} goals scored</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {match.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {match.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{match.tags.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MatchCard;