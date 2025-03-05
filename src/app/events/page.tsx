// src/app/events/page.tsx
import { Suspense } from 'react';
import EventList from '@/components/events/EventList';
import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';

// Type for event data
interface Event {
  id: string;
  name: string;
  description: string;
  picture?: string;
  address: {
    type: string;
    coordinates: [number, number];
  };
  startAt: string;
  endAt: string;
  createdAt: string;
}

// Simulate fetching events
async function getEvents(): Promise<Event[]> {
  return [
    {
      id: '1',
      name: "Grand débat politique",
      description: "Rejoignez-nous pour un débat ouvert sur les enjeux politiques actuels. Tous les citoyens sont invités à participer et à partager leurs opinions.",
      picture: "/images/political-event-1.jpg",
      address: {
        type: "Point",
        coordinates: [2.3522, 48.8566]
      },
      startAt: "2025-04-15T18:00:00Z",
      endAt: "2025-04-15T21:00:00Z",
      createdAt: "2025-03-01T10:00:00Z"
    },
    {
      id: '2',
      name: "Assemblée citoyenne",
      description: "Une assemblée citoyenne pour discuter des projets locaux et des initiatives communautaires. Venez partager vos idées et contribuer à l'amélioration de notre ville.",
      picture: "/images/political-event-2.jpg",
      address: {
        type: "Point",
        coordinates: [2.3522, 48.8566]
      },
      startAt: "2025-04-20T14:00:00Z",
      endAt: "2025-04-20T17:00:00Z",
      createdAt: "2025-03-05T10:00:00Z"
    },
    {
      id: '3',
      name: "Meeting électoral",
      description: "Venez rencontrer les candidats et découvrir leurs programmes pour les prochaines élections. Une occasion unique de poser vos questions directement.",
      picture: "/images/political-event-3.jpg",
      address: {
        type: "Point",
        coordinates: [2.3522, 48.8566]
      },
      startAt: "2025-05-05T19:00:00Z",
      endAt: "2025-05-05T22:00:00Z",
      createdAt: "2025-03-10T10:00:00Z"
    },
    {
      id: '4',
      name: "Forum de discussion politique",
      description: "Un forum ouvert pour discuter des enjeux politiques actuels avec des experts et des analystes. Une opportunité d'approfondir vos connaissances.",
      picture: "/images/political-event-4.jpg",
      address: {
        type: "Point",
        coordinates: [2.3522, 48.8566]
      },
      startAt: "2025-05-12T16:00:00Z",
      endAt: "2025-05-12T19:00:00Z",
      createdAt: "2025-03-15T10:00:00Z"
    },
    {
      id: '5',
      name: "Conférence sur les politiques environnementales",
      description: "Une conférence dédiée aux politiques environnementales et aux actions pour lutter contre le changement climatique. Des intervenants de premier plan seront présents.",
      picture: "/images/political-event-5.jpg",
      address: {
        type: "Point",
        coordinates: [2.3522, 48.8566]
      },
      startAt: "2025-05-18T10:00:00Z",
      endAt: "2025-05-18T16:00:00Z",
      createdAt: "2025-03-20T10:00:00Z"
    },
    {
      id: '6',
      name: "Débat sur l'économie et l'emploi",
      description: "Un débat sur les politiques économiques et les stratégies pour favoriser l'emploi. Des perspectives diverses seront présentées par des experts reconnus.",
      picture: "/images/political-event-6.jpg",
      address: {
        type: "Point",
        coordinates: [2.3522, 48.8566]
      },
      startAt: "2025-05-25T18:30:00Z",
      endAt: "2025-05-25T21:30:00Z",
      createdAt: "2025-03-25T10:00:00Z"
    }
  ];
}

export default async function EventsPage() {
  const events = await getEvents();
  
  return (
    <PageLayout 
      title="Événements Politiques"
      showBackButton={true}
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="pt-4 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Découvrez les événements politiques</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Parcourez les événements politiques à venir, assistez-y et partagez vos photos.
              </p>
            </div>
            <Suspense fallback={<div className="p-8 text-center">Chargement des événements...</div>}>
              <EventList events={events.map(event => ({
                ...event,
                startAt: new Date(event.startAt),
                endAt: new Date(event.endAt)
              }))} />
            </Suspense>
          </div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Accueil</span>
          </Link>
          
          <div className="flex flex-col items-center text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-xs mt-1">Événements</span>
          </div>
          
          <button className="flex flex-col items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01.707-7.07m-.707 7.07l-1.414 1.414M7.05 4.05A9 9 0 0119.95 16.95M7.05 4.05l-1.414 1.414" />
            </svg>
            <span className="text-xs mt-1">Découvrir</span>
          </button>
          
          <button className="flex flex-col items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profil</span>
          </button>
        </div>
      </div>
    </PageLayout>
  );
}