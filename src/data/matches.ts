import brazilMatch from '@/assets/brazil-1970-match.jpg';
import barcelonaPsgMatch from '@/assets/barcelona-psg-match.jpg';
import liverpoolMilanMatch from '@/assets/liverpool-milan-match.jpg';
import matchClassic from '@/assets/match-classic.jpg';

export interface Match {
  id: string;
  title: string;
  teams: string;
  date: string;
  score: string;
  tournament: string;
  image: string;
  description: string;
  tags: string[];
  stats: {
    goals: number;
    yellowCards: number;
    redCards: number;
    assists: number;
    attendance: number;
  };
  incidents: string[];
  impact: string;
  videoHighlights: string[];
}

export const legendaryMatches: Match[] = [
  {
    id: "brazil-italy-1970",
    title: "Brazil vs Italy - 1970 World Cup Final",
    teams: "Brazil vs Italy",
    date: "June 21, 1970",
    score: "4-1",
    tournament: "FIFA World Cup Final",
    image: brazilMatch,
    description: "The beautiful game at its finest. Brazil's masterclass performance in the 1970 World Cup Final showcased the perfect blend of skill, artistry, and teamwork that defined the greatest team ever assembled.",
    tags: ["final", "world-cup", "masterclass", "legendary"],
    stats: {
      goals: 5,
      yellowCards: 2,
      redCards: 0,
      assists: 7,
      attendance: 107412
    },
    incidents: [
      "Pelé's magnificent header opens the scoring",
      "Gerson's thunderous strike from 25 yards",
      "Jairzinho's clinical finish completes his tournament scoring streak",
      "Carlos Alberto's iconic team goal to seal the victory"
    ],
    impact: "Established Brazil as the greatest international team in football history and showcased the beautiful game's artistic possibilities.",
    videoHighlights: [
      "Pelé's opening goal",
      "Carlos Alberto's legendary team goal",
      "Match highlights compilation"
    ]
  },
  {
    id: "barcelona-psg-2017",
    title: "Barcelona vs PSG - Champions League Comeback",
    teams: "Barcelona vs PSG",
    date: "March 8, 2017",
    score: "6-1",
    tournament: "UEFA Champions League",
    image: barcelonaPsgMatch,
    description: "The greatest comeback in Champions League history. After losing 4-0 in Paris, Barcelona achieved the impossible with a stunning 6-1 victory that will never be forgotten.",
    tags: ["comeback", "champions-league", "impossible", "historic"],
    stats: {
      goals: 7,
      yellowCards: 4,
      redCards: 1,
      assists: 6,
      attendance: 96290
    },
    incidents: [
      "Suárez's early goal sparks hope",
      "Kurzawa's red card changes the game",
      "Neymar's stunning free-kick",
      "Sergi Roberto's last-minute winner sends Camp Nou into raptures"
    ],
    impact: "Proved that in football, anything is possible until the final whistle, inspiring countless future comebacks.",
    videoHighlights: [
      "All six Barcelona goals",
      "Neymar's masterclass",
      "Sergi Roberto's winner"
    ]
  },
  {
    id: "liverpool-milan-2005",
    title: "Liverpool vs AC Milan - Champions League Final",
    teams: "Liverpool vs AC Milan",
    date: "May 25, 2005",
    score: "3-3 (3-2 on penalties)",
    tournament: "UEFA Champions League Final",
    image: liverpoolMilanMatch,
    description: "The Miracle of Istanbul. Liverpool's incredible comeback from 3-0 down at halftime to win on penalties against the mighty AC Milan in one of football's greatest finals.",
    tags: ["final", "comeback", "miracle", "penalties"],
    stats: {
      goals: 6,
      yellowCards: 5,
      redCards: 0,
      assists: 4,
      attendance: 69000
    },
    incidents: [
      "Maldini scores after 52 seconds",
      "Crespo's brace puts Milan 3-0 up",
      "Gerrard's header starts the comeback",
      "Alonso's rebound makes it 3-2",
      "Jerzy Dudek's double save in extra time",
      "Liverpool win on penalties"
    ],
    impact: "Demonstrated the power of belief and never giving up, becoming synonymous with miraculous comebacks.",
    videoHighlights: [
      "The 6-minute comeback",
      "Dudek's penalty saves",
      "Full match highlights"
    ]
  },
  {
    id: "argentina-england-1986",
    title: "Argentina vs England - World Cup Quarter-Final",
    teams: "Argentina vs England",
    date: "June 22, 1986",
    score: "2-1",
    tournament: "FIFA World Cup Quarter-Final",
    image: matchClassic,
    description: "The match that showcased both the dark arts and pure genius of Diego Maradona - from the controversial 'Hand of God' to the greatest individual goal in World Cup history.",
    tags: ["controversial", "individual-brilliance", "world-cup", "historic"],
    stats: {
      goals: 3,
      yellowCards: 3,
      redCards: 0,
      assists: 0,
      attendance: 114580
    },
    incidents: [
      "Maradona's 'Hand of God' goal goes unnoticed by officials",
      "Maradona's 'Goal of the Century' - a 60-yard solo run",
      "Gary Lineker's late consolation goal"
    ],
    impact: "Cemented Maradona's legend while highlighting the human element and controversy that makes football captivating.",
    videoHighlights: [
      "The Hand of God goal",
      "Goal of the Century",
      "Match summary"
    ]
  },
  {
    id: "real-madrid-eintracht-1960",
    title: "Real Madrid vs Eintracht Frankfurt - European Cup Final",
    teams: "Real Madrid vs Eintracht Frankfurt",
    date: "May 18, 1960",
    score: "7-3",
    tournament: "European Cup Final",
    image: matchClassic,
    description: "The match that put European football on the map. Real Madrid's dominant performance at Hampden Park showcased the highest level of football ever seen at the time.",
    tags: ["final", "historic", "goalfest", "legendary"],
    stats: {
      goals: 10,
      yellowCards: 1,
      redCards: 0,
      assists: 8,
      attendance: 127621
    },
    incidents: [
      "Alfredo Di Stéfano's hat-trick",
      "Ferenc Puskás scores four goals",
      "Frankfurt's brave but futile resistance",
      "Real Madrid's fifth consecutive European Cup"
    ],
    impact: "Established the European Cup as the premier club competition and Real Madrid's dynasty in European football.",
    videoHighlights: [
      "Di Stéfano's hat-trick",
      "Puskás's four goals",
      "All 10 goals"
    ]
  },
  {
    id: "leicester-title-2016",
    title: "Leicester City's Premier League Triumph",
    teams: "Leicester City",
    date: "May 2, 2016",
    score: "Season Victory",
    tournament: "Premier League",
    image: matchClassic,
    description: "The greatest underdog story in football history. Leicester City's impossible Premier League title victory at 5000-1 odds proved that dreams can come true.",
    tags: ["underdog", "miracle", "premier-league", "historic"],
    stats: {
      goals: 68,
      yellowCards: 45,
      redCards: 2,
      assists: 41,
      attendance: 680000
    },
    incidents: [
      "Jamie Vardy's record-breaking scoring streak",
      "Riyad Mahrez's Player of the Year performance",
      "Tottenham's draw vs Chelsea confirms Leicester's title",
      "The King Power Stadium celebrations"
    ],
    impact: "Proved that with determination, teamwork, and belief, any dream is achievable in football.",
    videoHighlights: [
      "Season highlights",
      "Title celebration",
      "Vardy's record goals"
    ]
  }
];