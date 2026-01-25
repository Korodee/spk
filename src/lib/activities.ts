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
    name: "Mini-golf fluo",
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
      "période estivale",
      "Piste asphaltée de 900m",
      "Système de chronométrage",
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
      "période estivale",
      "Plusieurs scénarios de jeu",
      "Idéal pour les groupes",
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
      "période estivale",
      "Jeu en équipe",
      "Course contre la montre",
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
    name: "Salle d'Arcade",
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
    name: "Boutique d'Échange",
    slug: "boutique-echange",
    image: "/16.jpg",
    description:
      "Échangez vos tickets contre des prix variés : peluches, bonbons exotiques et surprises pour tous les goûts.",
    details: [
      "Large sélection de peluches",
      "Figurines et collectibles",
      "Bonbons exotiques et friandises",
    ],
    hubDeJeuxId: "redemption",
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
    name: "Active Zone",
    slug: "active-zone",
    image: "/13.jpg",
    description:
      "L'Active Zone comprend 10 salles de jeu interactives, chacune équipée d'une technologie réagissant en temps réel. Les joueurs y sautent, grimpent, lancent, courent et se déplacent d'un défi à l'autre, vivant une aventure palpitante.",
    details: [
      "10 salles de jeu interactives",
      "Technologie réagissant en temps réel",
      "Jeux physiques et dynamiques",
      "Parfait pour les groupes et anniversaires",
    ],
    hubDeJeuxId: "active-zone",
  },
];
