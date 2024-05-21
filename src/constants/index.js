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
    title: "Features",
    url: "/#features",
  },
  {
    id: "1",
    title: "Resources",
    url: "/resources",
  },
  {
    id: "2",
    title: "How to use",
    url: "/#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "/roadmap",
  },
  {
    id: "3",
    title: "Forum",
    url: "/forum",
  },
  {
    id: "4",
    title: "New account",
    url: "/#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/#login",
    onlyMobile: true,
  },
];
export const resources = [
  {
    id: "0",
    title: "Introduction to Ecological Agriculture",
    description:
      "A comprehensive guide to understanding ecological agriculture principles.",
    date: "June 2023",
    type: "document",
    url: "/path/to/document1.pdf",
  },
  {
    id: "1",
    title: "Sustainable Farming Practices",
    description:
      "Learn about various sustainable farming practices with this tutorial.",
    date: "July 2023",
    type: "tutorial",
    url: "https://example.com/tutorial1",
  },
  {
    id: "2",
    title: "Soil Health and Management",
    description: "An in-depth look at soil health and management techniques.",
    date: "August 2023",
    type: "document",
    url: "/path/to/document2.pdf",
  },
  {
    id: "3",
    title: "Permaculture Basics",
    description: "A tutorial on the basics of permaculture and its benefits.",
    date: "September 2023",
    type: "tutorial",
    url: "https://example.com/tutorial2",
  },
];
export const forumTopics = [
  {
    id: "0",
    title: "Best Practices for Sustainable Farming",
    author: "Jane Doe",
    date: "May 10, 2023",
    content:
      "What are some of the best practices for sustainable farming that you've implemented?",
    replies: [
      {
        id: "0-0",
        author: "John Smith",
        date: "May 11, 2023",
        content:
          "I have found crop rotation and cover cropping to be very effective.",
      },
      {
        id: "0-1",
        author: "Emily Johnson",
        date: "May 12, 2023",
        content:
          "Using compost and organic fertilizers has greatly improved my soil quality.",
      },
    ],
  },
  {
    id: "1",
    title: "Organic Pest Control Methods",
    author: "Michael Brown",
    date: "May 15, 2023",
    content: "Can anyone share some effective organic pest control methods?",
    replies: [
      {
        id: "1-0",
        author: "Anna Lee",
        date: "May 16, 2023",
        content: "I've had great success with neem oil and diatomaceous earth.",
      },
    ],
  },
];
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Doucument Resources",
  "Photo Resources",
  "Seamless Integration",
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
    title: "Introduction à l’Agriculture Écologique",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: introductionagru,
    colorful: true,
    subpoints: [
      {
        title: "Subpoint 1.1",
        text: "Comprendre les principes de base : Introduction aux concepts clés de l’agriculture durable et écologique.",
      },
      {
        title: "Subpoint 1.2",
        text: "Évaluation de la ferme actuelle : Analyse de l’état actuel de la ferme pour identifier les domaines d’amélioration.",
      },
    ],
  },
  {
    id: "1",
    title: "Planification et Conception",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: planification,
    subpoints: [
      {
        title: "Subpoint 2.1",
        text: "Conception de l’écosystème : Planification de la disposition de la ferme pour optimiser l’utilisation des ressources naturelles.",
      },
      {
        title: "Subpoint 2.2",
        text: "IChoix des cultures et rotation : Sélection des cultures adaptées au climat et au sol, et planification de la rotation des cultures pour maintenir la santé du sol.",
      },
    ],
  },
  {
    id: "2",
    title: "Techniques de Culture Écologique",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: technique,
    subpoints: [
      {
        title: "Subpoint 3.1",
        text: "Gestion de l’eau : Techniques de conservation de l’eau et irrigation efficace.",
      },
      {
        title: "Subpoint 3.2",
        text: "Contrôle naturel des nuisibles : Utilisation de méthodes biologiques pour gérer les parasites et les maladies.",
      },
    ],
  },
  {
    id: "3",
    title: "Fertilisation et Compostage",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: fertilisation,
    subpoints: [
      {
        title: "Subpoint 4.1",
        text: "Compostage : Création et utilisation de compost pour enrichir le sol.",
      },
      {
        title: "Subpoint 4.2",
        text: "Fertilisation organique : Utilisation d’engrais naturels pour nourrir les plantes.",
      },
    ],
  },
  {
    id: "4",
    title: "Récolte et Gestion Post-Récolte",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: recolte,
    subpoints: [
      {
        title: "Subpoint 5.1",
        text: "Récolte durable : Techniques de récolte qui minimisent les dommages à l’environnement.",
      },
      {
        title: "Subpoint 5.2",
        text: "Stockage et conservation : Méthodes pour conserver les récoltes sans utiliser de produits chimiques.",
      },
    ],
  },
  {
    id: "5",
    title: "RCommercialisation et Vente",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: rcommercialisation,
    subpoints: [
      {
        title: "Subpoint 6.1",
        text: "Marchés locaux : Accès aux marchés locaux pour vendre les produits.",
      },
      {
        title: "Subpoint 6.2",
        text: "Certifications écologiques : Obtention de certifications pour augmenter la valeur des produits.",
      },
    ],
  },
  {
    id: "6",
    title: "Expansion et Diversification",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: expansion,
    subpoints: [
      {
        title: "Subpoint 7.1",
        text: "Ajout de nouvelles cultures : Introduction de nouvelles cultures ou produits pour diversifier.",
      },
      {
        title: "Subpoint 7.2",
        text: "Agriculture communautaire : Collaboration avec d’autres fermes pour renforcer la communauté agricole locale.",
      },
    ],
  },
  {
    id: "7",
    title: "Évaluation et Amélioration Continue",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: amelioration,
    subpoints: [
      {
        title: "Subpoint 8.1",
        text: "Amélioration continue : Adaptation et amélioration des pratiques en fonction des résultats obtenus.",
      },
      {
        title: "Subpoint 8.2",
        text: "Suivi des résultats : Utilisation d’indicateurs pour évaluer les performances de la ferme.",
      },
    ],
  },
];

export const collabText =
  "With smart display  and top-notch tutorials ,GreenEco the best platform for farmers to learn and grow.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
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
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "Our Website provide every new studys about how to make your land ecological so our users can farm safe and preduce more and healthy crops.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with our website from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Search anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Reliability and Credibility",
    text: "Our Website provide very reliable and credible information about how to make your land ecological.every source of information is verified",
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
