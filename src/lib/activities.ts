export interface Activity {
  name: string;
  slug: string;
  image: string;
  description: string;
  details: string[];
  hubDeJeuxId?: string; // If provided, links to /hub-de-jeux#hubDeJeuxId instead of /activity/slug
}

export const activities: Activity[] = [
  {
    name: "Laser Tag",
    slug: "jeu-laser",
    image: "/laser-tag.jpg",
    description:
      "Plongez dans une arène de combat futuriste et affrontez vos amis dans une partie de laser tag endiablée.",
    details: [
      "Équipement de pointe",
      "Plusieurs modes de jeu",
      "Arène sur plusieurs niveaux",
    ],
  },
  {
    name: "Minigolf",
    slug: "minigolf",
    image: "/golf.jpg",
    description:
      "Testez votre précision sur notre parcours de minigolf Blacklight, une expérience fluo et amusante pour tous les âges.",
    details: [
      "Parcours 18 trous",
      "Thème Blacklight immersif",
      "Accessible à tous",
    ],
  },
  {
    name: "Réalité Virtuelle",
    slug: "realite-virtuelle",
    image: "/virtual-real.jpg",
    description:
      "Explorez des mondes incroyables et vivez des expériences à couper le souffle avec notre équipement de réalité virtuelle dernière génération.",
    details: [
      "Large catalogue de jeux",
      "Stations VR individuelles",
      "Expériences multijoueurs",
    ],
  },
  {
    name: "Karting",
    slug: "karting",
    image: "/karting.jpg",
    description:
      "Ressentez l'adrénaline de la vitesse sur notre piste de karting extérieure asphaltée. Qui sera le plus rapide ?",
    details: [
      "Karts à gaz haute performance",
      "Piste asphaltée de 900m",
      "Système de chronométrage",
      "(période estivale)",
    ],
  },
  {
    name: "Paintball",
    slug: "paintball",
    image: "/paintball.jpg",
    description:
      "Élaborez des stratégies et menez votre équipe à la victoire dans nos arènes de paintball thématiques.",
    details: [
      "Équipement de sécurité complet",
      "Plusieurs scénarios de jeu",
      "Idéal pour les groupes",
      "(période estivale)",
    ],
  },
  {
    name: "Labyrinthe",
    slug: "labyrinth",
    image: "/labyrinth.jpg",
    description:
      "Mettez votre logique et votre agilité à l'épreuve dans notre LABYRINTHE, un labyrinthe de défis inspiré de Fort Boyard.",
    details: [
      "Défis physiques et intellectuels",
      "Jeu en équipe",
      "Course contre la montre",
      "(période estivale)",
    ],
  },
  {
    name: "Salle VIP",
    slug: "salle-arcade-vip",
    image: "/arcade.jpg",
    description:
      "Revivez la nostalgie des jeux d'arcade classiques et découvrez les nouveautés dans notre salle VIP.",
    details: [
      "Jeux rétro et modernes",
      "Espace privatisable",
      "Ambiance unique",
    ],
  },
  {
    name: "Arcade",
    slug: "arcade",
    image: "/14.jpg",
    description:
      "Plongez dans un univers de jeux d'arcade modernes avec une ambiance néon immersive et colorée.",
    details: [
      "Sélection de jeux d'arcade modernes",
      "Ambiance lumineuse et sonore unique",
      "Espace adapté pour toute la famille",
    ],
    hubDeJeuxId: "arcade",
  },
  {
    name: "Petites quilles",
    slug: "petites-quilles",
    image: "/17.jpg",
    description:
      "4 allées de petites quilles destinées aux familles et fêtes d'enfants. Chaque allée peut accueillir jusqu'à 6 joueurs.",
    details: [
      "4 allées de petites quilles",
      "Idéal pour les familles et fêtes d'enfants",
      "Jusqu'à 6 joueurs par allée",
    ],
    hubDeJeuxId: "petites-quilles",
  },
  {
    name: "Karting d'hiver",
    slug: "karting-hiver",
    image: "/karting.jpg",
    description:
      "Karting sur courte piste enneigée. Vivez une expérience hivernale unique sur notre circuit adapté à la saison froide.",
    details: [
      "Piste courte enneigée",
      "Expérience hivernale unique",
      "Parfait pour les amateurs de sensations",
    ],
    hubDeJeuxId: "winter-karting",
  },
  {
    name: "3 Planchers interactifs",
    slug: "3-planchers-interactifs",
    image: "/8.jpg",
    description:
      "Jeu sportif immersif qui combine sport et technologie interactive avec des lumières LED interactives et des capteurs.",
    details: [
      "Lumières LED interactives",
      "Agilité et coordination",
      "Capacités physiques",
    ],
    hubDeJeuxId: "active-zone",
  },
  {
    name: "Arena Game",
    slug: "arena-game",
    image: "/11.jpg",
    description:
      "Réinvente de façon innovante le jeu du ballon prisonnier en le digitalisant avec des cibles hexagonales lumineuses.",
    details: [
      "Coordination œil-main",
      "Précision et vitesse",
      "Jeu digitalisé",
    ],
    hubDeJeuxId: "active-zone",
  },
  {
    name: "Climb Game",
    slug: "climb-game",
    image: "/10.jpg",
    description:
      "Simule une ascension de falaise : les joueurs doivent attraper les lumières vertes pour traverser la pièce.",
    details: [
      "Coordination et multitâche",
      "Agilité",
      "Défi d'équilibre",
    ],
    hubDeJeuxId: "active-zone",
  },
  {
    name: "Hide",
    slug: "hide",
    image: "/5.jpg",
    description:
      "Inspiré de Squid Game, Hide est un jeu de défi qui recrée les moments les plus intenses du scénario.",
    details: [
      "Réaction rapide",
      "Stratégie et communication",
      "Éviter les capteurs",
    ],
    hubDeJeuxId: "active-zone",
  },
  {
    name: "Hoops Game",
    slug: "hoops-game",
    image: "/4.jpg",
    description:
      "Apporte une touche innovante et dynamique au basketball avec des défis de tirs rapides et de précision.",
    details: [
      "Coordination œil-main",
      "Mémorisation",
      "Vitesse et précision",
    ],
    hubDeJeuxId: "active-zone",
  },
  {
    name: "Laser Maze",
    slug: "laser-maze",
    image: "/18.jpg",
    description:
      "Traversez la zone remplie de faisceaux laser et atteignez l'autre côté dans le temps imparti.",
    details: [
      "Agilité",
      "Réaction rapide",
      "Concentration",
    ],
    hubDeJeuxId: "active-zone",
  },
  {
    name: "Push",
    slug: "push",
    image: "/8.jpg",
    description:
      "Jeu de défi basé sur l'agilité et la mémoire avec des murs de boutons multicolores.",
    details: [
      "Coordination œil-main",
      "Précision et vitesse",
      "Coopération en équipe",
    ],
    hubDeJeuxId: "active-zone",
  },
  {
    name: "Control",
    slug: "control",
    image: "/9.jpg",
    description:
      "Gardez votre équilibre sur une plateforme de commande et utilisez votre corps pour jouer à des classiques comme Tetris ou Pac-Man.",
    details: [
      "Jeu de jambes",
      "Contrôle et coordination",
      "Précision",
    ],
    hubDeJeuxId: "active-zone",
  },
];
