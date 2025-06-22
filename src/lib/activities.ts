export interface Activity {
  name: string;
  slug: string;
  image: string;
  description: string;
  details: string[];
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
      "Ressentez l'adrénaline de la vitesse sur notre piste de karting intérieure sur plusieurs niveaux. Qui sera le plus rapide ?",
    details: [
      "Karts électriques haute performance",
      "Piste technique et rapide",
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
      "Plusieurs scénarios de jeu",
      "Idéal pour les groupes",
    ],
  },
  {
    name: "Labyrinthe",
    slug: "labyrinthe",
    image: "/labyrinth.jpg",
    description:
      "Mettez votre logique et votre agilité à l'épreuve dans notre LABYRINTHE, un labyrinthe de défis inspiré de Fort Boyard.",
    details: [
      "Défis physiques et intellectuels",
      "Jeu en équipe",
      "Course contre la montre",
    ],
  },
  {
    name: "Salle VIP",
    slug: "salle-vip",
    image: "/arcade.jpg",
    description:
      "Revivez la nostalgie des jeux d'arcade classiques et découvrez les nouveautés dans notre salle VIP.",
    details: [
      "Jeux rétro et modernes",
      "Espace privatisable",
      "Ambiance unique",
    ],
  },
];
