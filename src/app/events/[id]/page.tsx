// src/app/events/[id]/page.tsx
import EventDetailComponent from '@/components/events/EventDetailComponent';

interface Event {
  id: string;
  name: string;
  description: string;
  picture: string;
  address: {
    type: string;
    coordinates: [number, number];
  };
  startAt: string;
  endAt: string;
  createdAt: string;
}

interface Photo {
  id: string;
  url: string;
  uploadedAt: string;
}

// Simulate fetching a single event
async function getEvent(id: string): Promise<Event> {
  // Mock data - in a real app, fetch from API or database
  return {
    id,
    name: "Grand débat national sur la transition écologique",
    description: "Rejoignez-nous pour un débat ouvert sur les enjeux environnementaux actuels et les politiques de transition écologique. Tous les citoyens sont invités à participer et à partager leurs opinions dans cette discussion cruciale pour notre avenir commun.\n\nAu programme :\n- Présentations d'experts en politique environnementale\n- Tables rondes sur les solutions locales et nationales\n- Questions-réponses avec des élus\n- Ateliers participatifs sur les actions citoyennes",
    picture: "/images/political-event-1.jpg",
    address: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    },
    startAt: "2025-04-15T18:00:00Z",
    endAt: "2025-04-15T21:00:00Z",
    createdAt: "2025-03-01T10:00:00Z"
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getEventPhotos(eventId: string): Promise<Photo[]> {
  // Mock data - in a real app, fetch from API or database
  return [
    {
      id: '1',
      url: '/images/event-photo-1.jpg',
      uploadedAt: '2025-04-15T19:00:00Z'
    },
    {
      id: '2',
      url: '/images/event-photo-2.jpg',
      uploadedAt: '2025-04-15T19:15:00Z'
    },
    {
      id: '3',
      url: '/images/event-photo-3.jpg',
      uploadedAt: '2025-04-15T19:30:00Z'
    }
  ];
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const eventId = params.id;
  const event = await getEvent(eventId);
  const photos = await getEventPhotos(eventId);
  
  return <EventDetailComponent event={event} photos={photos} />;
}