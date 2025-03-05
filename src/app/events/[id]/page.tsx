// src/app/events/[id]/page.tsx
import { Suspense } from 'react';
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

// Mock function to fetch a single event
async function getEvent(id: string): Promise<Event> {
  // In a real app, fetch from API or database
  return {
    id,
    name: "International Jazz Festival Jakarta 2023",
    description: "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively.",
    picture: "/images/political-event-1.jpg",
    address: {
      type: "Point",
      coordinates: [106.8456, -6.2088] // Jakarta coordinates
    },
    startAt: "2023-04-30T09:00:00Z",
    endAt: "2023-04-30T21:00:00Z",
    createdAt: "2023-01-15T10:00:00Z"
  };
}

// Mock function to fetch event photos
async function getEventPhotos(eventId: string): Promise<Photo[]> {
  // In a real app, fetch from API or database
  return [
    {
      id: '1',
      url: '/images/event-photos/event-photo-1.jpg',
      uploadedAt: '2023-04-30T10:00:00Z'
    },
    {
      id: '2',
      url: '/images/event-photos/event-photo-2.jpg',
      uploadedAt: '2023-04-30T11:15:00Z'
    },
    {
      id: '3',
      url: '/images/event-photos/event-photo-3.jpg',
      uploadedAt: '2023-04-30T12:30:00Z'
    }
  ];
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const eventId = params.id;
  const event = await getEvent(eventId);
  const photos = await getEventPhotos(eventId);
  
  return (
    <Suspense fallback={<div>Loading event details...</div>}>
      <EventDetailComponent event={event} photos={photos} />
    </Suspense>
  );
}