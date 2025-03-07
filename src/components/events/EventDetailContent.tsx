// src/components/events/EventDetailComponent.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, CardBody, Tabs, Tab, Chip, Divider } from '@heroui/react';
import EventDetailMap from './EventDetailMap';
import EventCameraButton from './EventCameraButton';
import EventQRCode from './EventQRCode';
import EventPhotosGallery from './EventPhotosGallery';

interface EventDetailProps {
  event: {
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
  };
  photos: {
    id: string;
    url: string;
    uploadedAt: string;
  }[];
}

const EventDetailComponent: React.FC<EventDetailProps> = ({ event, photos }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'photos' | 'map' | 'qrcode'>('about');

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Extract month and day for the badge
  const getEventDay = (dateString: string) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const getEventMonth = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(date).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative">
        {/* Image placeholder or actual image */}
        <div className="h-80 bg-primary-100 relative">
          {event.picture ? (
            <Image
              src={event.picture}
              alt={event.name}
              fill
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary-100"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Back button */}
        <Link
          href="/events"
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>

        {/* Favorite button */}
        <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Event tag */}
        <div className="absolute top-24 left-4 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-md">
          {getEventDay(event.startAt)} {getEventMonth(event.startAt)}
        </div>
      </div>

      {/* Event Content */}
      <div className="relative -mt-8 bg-white rounded-t-3xl px-4 pt-6">
        <h1 className="text-2xl font-bold mb-2">{event.name}</h1>

        {/* Date and Time */}
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>
            {formatDate(event.startAt)} - {formatDate(event.endAt)}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            {formatTime(event.startAt)} - {formatTime(event.endAt)}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>TIM Park, Jakarta, Indonesia</span>
        </div>

        {/* Tab Navigation */}
        <Tabs
          aria-label="Event Details"
          color="primary"
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key.toString() as any)}
          className="w-full"
          variant="underlined"
        >
          <Tab
            key="about"
            title={
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>About</span>
              </div>
            }
          >
            <div className="py-4">
              <h2 className="text-lg font-bold mb-2">Description</h2>
              <p className="text-gray-600 text-sm">{event.description}</p>

              {/* Package Section */}
              <h2 className="text-lg font-bold mt-6 mb-4">Package</h2>

              {/* Gold Package */}
              <Card className="mb-4 border border-gray-200">
                <CardBody className="flex justify-between items-center p-4">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Gold Package</h3>
                      <p className="text-xs text-gray-500">VIPP Seat, 2 Day Full</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 line-through">$355</div>
                    <div className="font-bold text-primary-500">$235</div>
                  </div>
                </CardBody>
              </Card>

              {/* Silver Package */}
              <Card className="mb-4 border border-gray-200">
                <CardBody className="flex justify-between items-center p-4">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Silver Package</h3>
                      <p className="text-xs text-gray-500">Basic Seat, 2 Day Full</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 line-through">$155</div>
                    <div className="font-bold text-primary-500">$135</div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Tab>

          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4h16M4 20h16"
                  />
                </svg>
                <span>Photos</span>
              </div>
            }
          >
            <div className="py-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Photos Gallery</h2>
                <EventCameraButton eventId={event.id} />
              </div>
              <EventPhotosGallery photos={photos} />
            </div>
          </Tab>

          <Tab
            key="map"
            title={
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <span>Map</span>
              </div>
            }
          >
            <div className="py-4">
              <h2 className="text-lg font-bold mb-4">Event Location</h2>
              <EventDetailMap
                coordinates={event.address?.coordinates || [2.3522, 48.8566]}
                eventName={event.name}
              />
            </div>
          </Tab>

          <Tab
            key="qrcode"
            title={
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
                <span>QR Code</span>
              </div>
            }
          >
            <div className="py-4">
              <h2 className="text-lg font-bold mb-4 text-center">Scan to Join Event</h2>
              <EventQRCode eventId={event.id} eventName={event.name} />
            </div>
          </Tab>
        </Tabs>

        {/* Book Now Button */}
        <div className="py-4 mt-4 sticky bottom-0 bg-white border-t border-gray-200">
          <Button className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailComponent;
