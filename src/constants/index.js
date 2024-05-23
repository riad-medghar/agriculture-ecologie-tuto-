import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  introductionagru,
  planification,
  technique,
  rcommercialisation,
  expansion,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  fertilisation,
  recolte,
  amelioration,
} from "../../src/assets/assets";

export const navigation = [
  {
    id: "0",
    title: "Ressources",
    url: "/resources",
  },
  {
    id: "2",
    title: "Feuille de route",
    url: "/roadmap",
  },
  {
    id: "3",
    title: "Forum",
    url: "/forum",
  },
  {
    id: "4",
    title: "Nouveau compte",
    url: "/newaccount",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Se connecter",
    url: "/signin",
    onlyMobile: true,
  },
];
export const resources = [
  {
    id: "0",
    title: "Introduction à l'Agriculture Écologique",
    description:
      "Un guide complet pour comprendre les principes de l'agriculture écologique.",
    date: "Juin 2023",
    type: "document",
    url: "/path/to/document1.pdf",
  },
  {
    id: "1",
    title: "Pratiques Agricoles Durables",
    description:
      "Apprenez les différentes pratiques agricoles durables avec ce tutoriel.",
    date: "Juillet 2023",
    type: "tutoriel",
    url: "https://example.com/tutorial1",
  },
  {
    id: "2",
    title: "Santé et Gestion du Sol",
    description: "Une analyse approfondie de la santé et de la gestion du sol.",
    date: "Août 2023",
    type: "document",
    url: "/path/to/document2.pdf",
  },
  {
    id: "3",
    title: "Bases de la Permaculture",
    description:
      "Un tutoriel sur les bases de la permaculture et ses avantages.",
    date: "Septembre 2023",
    type: "tutoriel",
    url: "https://example.com/tutorial2",
  },
];
export const forumTopics = [
  {
    id: "0",
    title: "Meilleures Pratiques pour l'Agriculture Durable",
    author: "Jane Doe",
    date: "10 Mai 2023",
    content:
      "Quelles sont les meilleures pratiques pour l'agriculture durable que vous avez mises en œuvre ?",
    replies: [
      {
        id: "0-0",
        author: "John Smith",
        date: "11 Mai 2023",
        content:
          "J'ai trouvé que la rotation des cultures et l'utilisation de cultures de couverture sont très efficaces.",
      },
      {
        id: "0-1",
        author: "Emily Johnson",
        date: "12 Mai 2023",
        content:
          "L'utilisation de compost et d'engrais organiques a considérablement amélioré la qualité de mon sol.",
      },
    ],
  },
  {
    id: "1",
    title: "Méthodes de Lutte Contre les Ravageurs Biologiques",
    author: "Michael Brown",
    date: "15 Mai 2023",
    content:
      "Quelqu'un peut-il partager des méthodes efficaces de lutte biologique contre les ravageurs ?",
    replies: [
      {
        id: "1-0",
        author: "Anna Lee",
        date: "16 Mai 2023",
        content:
          "J'ai eu beaucoup de succès avec l'huile de neem et la terre de diatomée.",
      },
    ],
  },
];
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Ressources Documentaires",
  "Ressources Photos",
  "Intégration Transparente",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Introduction à l'Agriculture Écologique",
    text: "Permettre au chatbot de comprendre et de répondre aux commandes vocales, facilitant ainsi l'interaction des utilisateurs avec l'application mains libres.",
    date: "Mai 2023",
    status: "terminé",
    imageUrl: introductionagru,
    colorful: true,
    subpoints: [
      {
        title: "Sous-point 1.1",
        text: "Comprendre les principes de base : Introduction aux concepts clés de l'agriculture durable et écologique.",
      },
      {
        title: "Sous-point 1.2",
        text: "Évaluation de la ferme actuelle : Analyse de l'état actuel de la ferme pour identifier les domaines d'amélioration.",
      },
    ],
  },
  {
    id: "1",
    title: "Planification et Conception",
    text: "Ajouter des éléments de jeu, tels que des badges ou des tableaux de classement, pour inciter les utilisateurs à interagir plus fréquemment avec le chatbot.",
    date: "Mai 2023",
    status: "en cours",
    imageUrl: planification,
    subpoints: [
      {
        title: "Sous-point 2.1",
        text: "Conception de l'écosystème : Planification de la disposition de la ferme pour optimiser l'utilisation des ressources naturelles.",
      },
      {
        title: "Sous-point 2.2",
        text: "Choix des cultures et rotation : Sélection des cultures adaptées au climat et au sol, et planification de la rotation des cultures pour maintenir la santé du sol.",
      },
    ],
  },
  {
    id: "2",
    title: "Techniques de Culture Écologique",
    text: "Permettre aux utilisateurs de personnaliser l'apparence et le comportement du chatbot, le rendant ainsi plus engageant et amusant à utiliser.",
    date: "Mai 2023",
    status: "terminé",
    imageUrl: technique,
    subpoints: [
      {
        title: "Sous-point 3.1",
        text: "Gestion de l'eau : Techniques de conservation de l'eau et irrigation efficace.",
      },
      {
        title: "Sous-point 3.2",
        text: "Contrôle naturel des nuisibles : Utilisation de méthodes biologiques pour gérer les parasites et les maladies.",
      },
    ],
  },
  {
    id: "3",
    title: "Fertilisation et Compostage",
    text: "Permettre au chatbot d'accéder à des sources de données externes, telles que les API météo ou les API de nouvelles, pour fournir des recommandations plus pertinentes.",
    date: "Mai 2023",
    status: "en cours",
    imageUrl: fertilisation,
    subpoints: [
      {
        title: "Sous-point 4.1",
        text: "Compostage : Création et utilisation de compost pour enrichir le sol.",
      },
      {
        title: "Sous-point 4.2",
        text: "Fertilisation organique : Utilisation d'engrais naturels pour nourrir les plantes.",
      },
    ],
  },
  {
    id: "4",
    title: "Récolte et Gestion Post-Récolte",
    text: "Permettre au chatbot d'accéder à des sources de données externes, telles que les API météo ou les API de nouvelles, pour fournir des recommandations plus pertinentes.",
    date: "Mai 2023",
    status: "en cours",
    imageUrl: recolte,
    subpoints: [
      {
        title: "Sous-point 5.1",
        text: "Récolte durable : Techniques de récolte qui minimisent les dommages à l'environnement.",
      },
      {
        title: "Sous-point 5.2",
        text: "Stockage et conservation : Méthodes pour conserver les récoltes sans utiliser de produits chimiques.",
      },
    ],
  },
  {
    id: "5",
    title: "Commercialisation et Vente",
    text: "Permettre au chatbot d'accéder à des sources de données externes, telles que les API météo ou les API de nouvelles, pour fournir des recommandations plus pertinentes.",
    date: "Mai 2023",
    status: "en cours",
    imageUrl: rcommercialisation,
    subpoints: [
      {
        title: "Sous-point 6.1",
        text: "Marchés locaux : Accès aux marchés locaux pour vendre les produits.",
      },
      {
        title: "Sous-point 6.2",
        text: "Certifications écologiques : Obtention de certifications pour augmenter la valeur des produits.",
      },
    ],
  },
  {
    id: "6",
    title: "Expansion et Diversification",
    text: "Permettre au chatbot d'accéder à des sources de données externes, telles que les API météo ou les API de nouvelles, pour fournir des recommandations plus pertinentes.",
    date: "Mai 2023",
    status: "en cours",
    imageUrl: expansion,
    subpoints: [
      {
        title: "Sous-point 7.1",
        text: "Ajout de nouvelles cultures : Introduction de nouvelles cultures ou produits pour diversifier.",
      },
      {
        title: "Sous-point 7.2",
        text: "Agriculture communautaire : Collaboration avec d'autres fermes pour renforcer la communauté agricole locale.",
      },
    ],
  },
  {
    id: "7",
    title: "Évaluation et Amélioration Continue",
    text: "Permettre au chatbot d'accéder à des sources de données externes, telles que les API météo ou les API de nouvelles, pour fournir des recommandations plus pertinentes.",
    date: "Mai 2023",
    status: "en cours",
    imageUrl: amelioration,
    subpoints: [
      {
        title: "Sous-point 8.1",
        text: "Amélioration continue : Adaptation et amélioration des pratiques en fonction des résultats obtenus.",
      },
      {
        title: "Sous-point 8.2",
        text: "Suivi des résultats : Utilisation d'indicateurs pour évaluer les performances de la ferme.",
      },
    ],
  },
];

export const collabText =
  "Avec un affichage intelligent et des tutoriels de premier ordre, GreenEco est la meilleure plateforme pour les agriculteurs pour apprendre et se développer.";

export const collabContent = [
  {
    id: "0",
    title: "Intégration Transparente",
    text: collabText,
  },
  {
    id: "1",
    title: "Automatisation Intelligente",
  },
  {
    id: "2",
    title: "Sécurité de Haut Niveau",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basique",
    description: "Chatbot IA, recommandations personnalisées",
    price: "0",
    features: [
      "Un chatbot IA qui peut comprendre vos requêtes",
      "Recommandations personnalisées en fonction de vos préférences",
      "Possibilité d'explorer l'application et ses fonctionnalités sans frais",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description:
      "Chatbot IA avancé, support prioritaire, tableau de bord analytique",
    price: "9.99",
    features: [
      "Un chatbot IA avancé qui peut comprendre des requêtes complexes",
      "Un tableau de bord analytique pour suivre vos conversations",
      "Support prioritaire pour résoudre rapidement les problèmes",
    ],
  },
  {
    id: "2",
    title: "Entreprise",
    description: "Chatbot IA personnalisé, analyses avancées, compte dédié",
    price: null,
    features: [
      "Un chatbot IA qui peut comprendre vos requêtes",
      "Recommandations personnalisées en fonction de vos préférences",
      "Possibilité d'explorer l'application et ses fonctionnalités sans frais",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Demandez n'importe quoi",
    text: "Permet aux utilisateurs de trouver rapidement des réponses à leurs questions sans avoir à rechercher à travers de multiples sources.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Améliorez-vous chaque jour",
    text: "Notre site Web fournit de nouvelles études sur la manière de rendre votre terre écologique afin que nos utilisateurs puissent cultiver en toute sécurité et produire des cultures plus saines.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connectez-vous partout",
    text: "Connectez-vous à notre site Web de n'importe où, sur n'importe quel appareil, le rendant ainsi plus accessible et pratique.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Réponse rapide",
    text: "Permet aux utilisateurs de trouver rapidement des réponses à leurs questions sans avoir à rechercher à travers de multiples sources.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Rechercher n'importe quoi",
    text: "Permet aux utilisateurs de trouver rapidement des réponses à leurs questions sans avoir à rechercher à travers de multiples sources.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Fiabilité et Crédibilité",
    text: "Notre site Web fournit des informations très fiables et crédibles sur la manière de rendre votre terre écologique. Chaque source d'information est vérifiée.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
