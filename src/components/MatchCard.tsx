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
    <Link to={`/match/${match.id}`} className="group block animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 bg-card-gradient hover:shadow-2xl hover:shadow-primary/10 border-0 hover:border hover:border-primary/20">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={match.image}
            alt={match.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />
          
          {/* Match Score Overlay */}
          <div className="absolute bottom-4 left-4 right-4 transform group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors duration-300">{match.teams}</h3>
                <p className="text-gray-200 text-sm group-hover:text-white transition-colors duration-300">{match.date}</p>
              </div>
              <div className="text-right">
                <div className="text-accent text-2xl font-bold group-hover:scale-110 transition-transform duration-300 group-hover:text-yellow-400">{match.score}</div>
              </div>
            </div>
          </div>

          {/* Tournament Badge */}
          <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
            <Badge variant="secondary" className="bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
              <Trophy className="h-3 w-3 mr-1 group-hover:rotate-12 transition-transform duration-300" />
              {match.tournament}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6 group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-muted/30 transition-all duration-500">
          <h4 className="font-bold text-xl mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
            {match.title}
          </h4>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 group-hover:text-card-foreground transition-colors duration-300">
            {match.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm group-hover:scale-105 transition-transform duration-300">
            <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
              <Users className="h-4 w-4 mr-2 group-hover:text-accent transition-colors duration-300" />
              <span>{match.stats.attendance.toLocaleString()} attendance</span>
            </div>
            <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
              <Calendar className="h-4 w-4 mr-2 group-hover:text-accent transition-colors duration-300" />
              <span>{match.stats.goals} goals scored</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 group-hover:gap-3 transition-all duration-300">
            {match.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-pointer">
                {tag}
              </Badge>
            ))}
            {match.tags.length > 3 && (
              <Badge variant="outline" className="text-xs hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 cursor-pointer">
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