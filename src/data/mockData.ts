// src/data/mockData.ts

// Types pour les données
export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  free?: boolean;
  live?: boolean;
  image: string;
  category?: string;
  invitation?: boolean;
  description?: string;
}

type CategoryColor = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

export interface Category {
  name: string;
  icon: string;
  color: CategoryColor;
}

// Événements mis en avant
export const featuredEvents: Event[] = [
  {
    id: '1',
    name: 'Grand Débat National',
    date: '15 Avril 2025',
    location: 'Paris, France',
    free: true,
    image: '/images/political-event-1.jpg',
    live: false,
    category: 'Démocratie',
    description:
      'Un débat national sur les grands enjeux de la démocratie participative en France.',
  },
  {
    id: '2',
    name: 'Forum Citoyen',
    date: '28 Avril 2025',
    location: 'Lyon, France',
    free: true,
    image: '/images/political-event-2.jpg',
    live: true,
    category: 'Participation',
    description:
      "Un forum permettant aux citoyens de s'exprimer et d'échanger sur des thématiques locales.",
  },
];

// Événements spéciaux
export const specialEvents: Event[] = [
  {
    id: '3',
    name: 'Conférence Climat',
    category: 'Environnement',
    date: '12 Mai 2025',
    location: 'Bordeaux, France',
    free: true,
    image: '/images/political-event-3.jpg',
    description: 'Une conférence sur les enjeux climatiques et les solutions à mettre en place.',
  },
  {
    id: '4',
    name: 'Sommet Économique',
    category: 'Économie',
    date: '20 Mai 2025',
    location: 'Marseille, France',
    invitation: true,
    image: '/images/political-event-4.jpg',
    description: 'Un sommet réunissant des experts pour discuter des perspectives économiques.',
  },
  {
    id: '5',
    name: 'Forum Jeunesse',
    category: 'Jeunesse',
    date: '25 Mai 2025',
    location: 'Toulouse, France',
    free: true,
    image: '/images/political-event-5.jpg',
    description: 'Un forum dédié aux jeunes et à leur place dans la société.',
  },
];

// Événements à venir
export const upcomingEvents: Event[] = [
  {
    id: '6',
    name: 'Conférence sur la Transition Écologique',
    date: '15 Juin 2025',
    location: 'Nantes, France',
    image: '/images/political-event-6.jpg',
    category: 'Environnement',
    description: 'Une conférence sur les enjeux de la transition écologique dans notre société.',
  },
  {
    id: '7',
    name: 'Forum National de la Jeunesse',
    date: '22 Juin 2025',
    location: 'Strasbourg, France',
    image: '/images/political-event-7.jpg',
    category: 'Jeunesse',
    description: "Un forum national pour permettre aux jeunes de s'exprimer sur leur avenir.",
  },
];

// Catégories
export const categories: Category[] = [
  { name: 'Démocratie', icon: '🗳️', color: 'primary' },
  { name: 'Environnement', icon: '🌍', color: 'success' },
  { name: 'Social', icon: '👥', color: 'secondary' },
  { name: 'Économie', icon: '💼', color: 'warning' },
  { name: 'Droits', icon: '✊', color: 'danger' },
  { name: 'Régional', icon: '🏛️', color: 'primary' },
];

// Fonction simulant un appel API pour récupérer les événements
export const fetchEvents = (type: 'featured' | 'special' | 'upcoming'): Promise<Event[]> => {
  return new Promise((resolve) => {
    // Simuler un délai de chargement
    setTimeout(() => {
      switch (type) {
        case 'featured':
          resolve(featuredEvents);
          break;
        case 'special':
          resolve(specialEvents);
          break;
        case 'upcoming':
          resolve(upcomingEvents);
          break;
        default:
          resolve([]);
      }
    }, 500); // Délai de 500ms pour simuler une requête réseau
  });
};

// Fonction simulant un appel API pour récupérer les catégories
export const fetchCategories = (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 300);
  });
};

// Fonction pour récupérer un événement par ID
export const getEventById = (id: string): Promise<Event | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allEvents = [...featuredEvents, ...specialEvents, ...upcomingEvents];
      const event = allEvents.find((event) => event.id === id);
      resolve(event);
    }, 200);
  });
};
