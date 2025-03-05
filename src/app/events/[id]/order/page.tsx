// src/app/events/[id]/order/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import EventOrderDetail from '@/components/events/EventOrderDetail';
import { Spinner } from '@heroui/react';

interface Event {
  id: string;
  name: string;
  picture: string;
  startAt: string;
  endAt: string;
  location?: string;
}

interface Package {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
}

export default function EventOrderPage() {
  const params = useParams();
  const eventId = params.id as string;
  
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState<Event | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  useEffect(() => {
    // In a real app, fetch from API
    const fetchEvent = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        setEvent({
          id: eventId,
          name: "International Jazz Festival Jakarta 2023",
          picture: "/images/event-photos/event-photo-1.jpg",
          startAt: "2023-04-30T09:00:00Z",
          endAt: "2023-04-30T21:00:00Z",
          location: "TIM Park, Jakarta, Indonesia"
        });
        
        setSelectedPackage({
          name: "Gold Package",
          description: "VIPP Seat, 2 Day Full",
          price: 235,
          originalPrice: 355
        });
      } catch (error) {
        console.error('Error fetching event:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Spinner color="primary" size="lg" />
      </div>
    );
  }

  if (!event || !selectedPackage) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <p>Event not found or package not selected</p>
      </div>
    );
  }

  return <EventOrderDetail event={event} selectedPackage={selectedPackage} />;
}