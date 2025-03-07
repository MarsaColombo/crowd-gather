// src/app/my-events/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, Tab, Card, CardBody, CardHeader, Button, Chip } from '@heroui/react';
import type { Key } from '@react-types/shared';

// Mock event data
const upcomingEvents = [
  {
    id: '1',
    name: 'Grand Débat National',
    date: '15 Avril 2025',
    time: '18:00 - 21:00',
    location: 'Paris, France',
    image: '/images/political-event-1.jpg',
    ticket: 'Gold Package',
    ticketId: 'EVT-2025-012345',
  },
  {
    id: '2',
    name: 'Forum Citoyen',
    date: '28 Avril 2025',
    time: '14:00 - 17:00',
    location: 'Lyon, France',
    image: '/images/political-event-2.jpg',
    ticket: 'Standard Access',
    ticketId: 'EVT-2025-012346',
  },
];

const pastEvents = [
  {
    id: '3',
    name: 'Conférence Climat',
    date: '12 Mars 2025',
    time: '09:00 - 12:00',
    location: 'Bordeaux, France',
    image: '/images/political-event-3.jpg',
    ticket: 'VIP Access',
    ticketId: 'EVT-2025-010857',
  },
  {
    id: '4',
    name: 'Sommet Économique',
    date: '28 Février 2025',
    time: '10:00 - 16:00',
    location: 'Marseille, France',
    image: '/images/political-event-4.jpg',
    ticket: 'Standard Access',
    ticketId: 'EVT-2025-009673',
  },
];

export default function MyEventsPage() {
  const [selectedTab, setSelectedTab] = useState<Key>('upcoming');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-6 px-4">
        <h1 className="text-2xl font-bold text-center">My Events</h1>
      </div>

      {/* Tabs */}
      <Tabs
        aria-label="My Events Tabs"
        selectedKey={selectedTab}
        onSelectionChange={(key: Key) => setSelectedTab(key)}
        className="w-full p-0"
        variant="underlined"
        color="primary"
      >
        <Tab
          key="upcoming"
          title={
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              <span>Upcoming</span>
            </div>
          }
        >
          <div className="px-4 py-4">
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="mb-4">
                    <CardHeader className="p-0">
                      <div className="relative h-40 w-full">
                        <Image src={event.image} alt={event.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {/* Ticket Badge */}
                        <div className="absolute top-2 right-2">
                          <Chip color="primary" variant="solid" size="sm">
                            {event.ticket}
                          </Chip>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="p-4">
                      <h3 className="text-lg font-bold mb-1">{event.name}</h3>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
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
                            {event.date} • {event.time}
                          </span>
                        </div>

                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
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
                          <span>{event.location}</span>
                        </div>

                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                            />
                          </svg>
                          <span className="font-mono text-xs">Ticket ID: {event.ticketId}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button
                          color="primary"
                          className="flex-1"
                          as={Link}
                          href={`/events/${event.id}`}
                        >
                          View Details
                        </Button>
                        <Button color="default" variant="bordered" className="flex-1">
                          View Ticket
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-400"
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
                <h3 className="mt-4 text-lg font-medium">No upcoming events</h3>
                <p className="mt-2 text-gray-500">
                  Browse events and participate to see them here.
                </p>
                <Button color="primary" className="mt-4" as={Link} href="/events">
                  Browse Events
                </Button>
              </div>
            )}
          </div>
        </Tab>

        <Tab
          key="past"
          title={
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              <span>Past</span>
            </div>
          }
        >
          <div className="px-4 py-4">
            {pastEvents.length > 0 ? (
              <div className="space-y-4">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="mb-4">
                    <CardHeader className="p-0">
                      <div className="relative h-40 w-full">
                        <Image
                          src={event.image}
                          alt={event.name}
                          fill
                          className="object-cover filter grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {/* Completed Badge */}
                        <div className="absolute top-2 right-2">
                          <Chip color="default" variant="solid" size="sm">
                            Completed
                          </Chip>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="p-4">
                      <h3 className="text-lg font-bold mb-1">{event.name}</h3>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
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
                            {event.date} • {event.time}
                          </span>
                        </div>

                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
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
                          <span>{event.location}</span>
                        </div>

                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                            />
                          </svg>
                          <span className="font-mono text-xs">Ticket ID: {event.ticketId}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button
                          color="primary"
                          className="flex-1"
                          as={Link}
                          href={`/events/${event.id}`}
                        >
                          View Details
                        </Button>
                        <Button color="secondary" variant="flat" className="flex-1">
                          Add Photos
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-400"
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
                <h3 className="mt-4 text-lg font-medium">No past events</h3>
                <p className="mt-2 text-gray-500">You haven&apos;t attended any events yet.</p>
              </div>
            )}
          </div>
        </Tab>
      </Tabs>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </Link>

          <Link href="/events" className="flex flex-col items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-xs mt-1">Events</span>
          </Link>

          <Link href="/my-events" className="flex flex-col items-center text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            <span className="text-xs mt-1">My Events</span>
          </Link>

          <Link href="/profile" className="flex flex-col items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
