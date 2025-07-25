import brazilJersey from '@/assets/brazil-1970-jersey.jpg';
import argentinaJersey from '@/assets/argentina-1986-jersey.jpg';
import barcelonaJersey from '@/assets/barcelona-jersey.jpg';

export interface Jersey {
  id: string;
  name: string;
  team: string;
  year: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'classic' | 'modern' | 'limited';
  size: string[];
  description: string;
  features: string[];
  inStock: boolean;
  popularity: number;
}

export const jerseyCollection: Jersey[] = [
  {
    id: "brazil-1970-home",
    name: "Brazil 1970 World Cup Home Jersey",
    team: "Brazil National Team",
    year: "1970",
    price: 89.99,
    originalPrice: 119.99,
    image: brazilJersey,
    category: "classic",
    size: ["S", "M", "L", "XL", "XXL"],
    description: "The iconic yellow jersey worn during Brazil's greatest World Cup triumph in 1970. Worn by legends like Pelé, Jairzinho, and Carlos Alberto.",
    features: [
      "Authentic 1970 design",
      "Premium cotton blend",
      "Embroidered Brazil crest",
      "Vintage cut and feel",
      "Officially licensed reproduction"
    ],
    inStock: true,
    popularity: 98
  },
  {
    id: "argentina-1986-home",
    name: "Argentina 1986 World Cup Home Jersey",
    team: "Argentina National Team",
    year: "1986",
    price: 94.99,
    image: argentinaJersey,
    category: "classic",
    size: ["S", "M", "L", "XL"],
    description: "The legendary jersey worn by Diego Maradona during Argentina's 1986 World Cup victory, featuring both the Hand of God and Goal of the Century.",
    features: [
      "Classic sky blue and white stripes",
      "Vintage Le Coq Sportif design",
      "Cotton-polyester blend",
      "Retro collar and cuffs",
      "Maradona's number 10 available"
    ],
    inStock: true,
    popularity: 96
  },
  {
    id: "barcelona-2009-home",
    name: "FC Barcelona 2008-09 Home Jersey",
    team: "FC Barcelona",
    year: "2008-09",
    price: 79.99,
    originalPrice: 99.99,
    image: barcelonaJersey,
    category: "classic",
    size: ["S", "M", "L", "XL", "XXL"],
    description: "The jersey worn during Barcelona's historic treble season under Pep Guardiola, featuring the iconic blaugrana stripes.",
    features: [
      "Nike Dri-FIT technology",
      "Classic blaugrana stripes",
      "Embroidered club crest",
      "UNICEF sponsorship",
      "Messi #10 option available"
    ],
    inStock: true,
    popularity: 92
  },
  {
    id: "milan-1990-home",
    name: "AC Milan 1989-90 Home Jersey",
    team: "AC Milan",
    year: "1989-90",
    price: 84.99,
    image: "/api/placeholder/400/500",
    category: "classic",
    size: ["M", "L", "XL"],
    description: "The iconic red and black striped jersey worn by the legendary AC Milan team with Van Basten, Gullit, and Rijkaard.",
    features: [
      "Classic Adidas design",
      "Red and black stripes",
      "Vintage collar",
      "Mediolanum sponsorship",
      "Premium fabric quality"
    ],
    inStock: false,
    popularity: 89
  },
  {
    id: "real-madrid-2002-home",
    name: "Real Madrid 2001-02 Home Jersey",
    team: "Real Madrid",
    year: "2001-02",
    price: 87.99,
    image: "/api/placeholder/400/500",
    category: "classic",
    size: ["S", "M", "L", "XL"],
    description: "The pristine white jersey from the Galácticos era, worn during the Champions League final victory with Zidane's iconic volley.",
    features: [
      "Classic white design",
      "Adidas three stripes",
      "Embroidered royal crest",
      "Teka sponsorship",
      "Zidane #5 available"
    ],
    inStock: true,
    popularity: 94
  },
  {
    id: "liverpool-2005-home",
    name: "Liverpool 2004-05 Home Jersey",
    team: "Liverpool FC",
    year: "2004-05",
    price: 82.99,
    image: "/api/placeholder/400/500",
    category: "classic",
    size: ["S", "M", "L", "XL", "XXL"],
    description: "The red jersey worn during Liverpool's miraculous Champions League comeback in Istanbul against AC Milan.",
    features: [
      "Classic Liverpool red",
      "Reebok design",
      "Carlsberg sponsorship",
      "Traditional collar",
      "Gerrard #8 option"
    ],
    inStock: true,
    popularity: 91
  },
  {
    id: "manchester-united-1999-home",
    name: "Manchester United 1998-99 Home Jersey",
    team: "Manchester United",
    year: "1998-99",
    price: 89.99,
    image: "/api/placeholder/400/500",
    category: "classic",
    size: ["M", "L", "XL"],
    description: "The legendary red jersey worn during United's historic treble season, featuring the iconic Sharp sponsorship.",
    features: [
      "Classic Manchester United red",
      "Umbro design",
      "Sharp sponsorship",
      "Traditional collar",
      "Beckham #7 available"
    ],
    inStock: true,
    popularity: 93
  },
  {
    id: "brazil-2023-home",
    name: "Brazil 2023 Home Jersey",
    team: "Brazil National Team",
    year: "2023",
    price: 95.99,
    image: "/api/placeholder/400/500",
    category: "modern",
    size: ["S", "M", "L", "XL", "XXL", "XXXL"],
    description: "The latest Brazil home jersey featuring modern Nike technology and the classic yellow design with contemporary touches.",
    features: [
      "Nike Dri-FIT ADV technology",
      "Sustainable materials",
      "Modern fit",
      "Breathable fabric",
      "Official 2023 design"
    ],
    inStock: true,
    popularity: 85
  },
  {
    id: "psg-2023-home",
    name: "Paris Saint-Germain 2023-24 Home Jersey",
    team: "Paris Saint-Germain",
    year: "2023-24",
    price: 99.99,
    image: "/api/placeholder/400/500",
    category: "modern",
    size: ["S", "M", "L", "XL", "XXL"],
    description: "The striking navy blue jersey with red accents, worn by Mbappé, Neymar, and other PSG superstars.",
    features: [
      "Nike Dri-FIT technology",
      "Navy blue with red stripe",
      "QatarAirways sponsorship",
      "Modern athletic fit",
      "Premium material blend"
    ],
    inStock: true,
    popularity: 87
  },
  {
    id: "chelsea-retro-1970",
    name: "Chelsea FC 1970 Retro Home Jersey",
    team: "Chelsea FC",
    year: "1970",
    price: 76.99,
    originalPrice: 92.99,
    image: "/api/placeholder/400/500",
    category: "limited",
    size: ["S", "M", "L", "XL"],
    description: "Limited edition reproduction of Chelsea's 1970 FA Cup winning jersey, featuring the classic royal blue design.",
    features: [
      "Limited edition reproduction",
      "Classic royal blue",
      "Vintage Umbro styling",
      "Cotton-poly blend",
      "Numbered limited series"
    ],
    inStock: true,
    popularity: 78
  }
];