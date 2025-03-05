"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Input, 
  Button, 
  Card, 
  CardBody, 
  Chip,
  Avatar,
  Divider,
  Badge,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@heroui/react";
import EventCard from '@/components/events/EventCard';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Featured events data
  const featuredEvents = [
    {
      id: '1',
      name: 'International Jazz Festival Jakarta 2023',
      startAt: new Date('2023-04-30T09:00:00Z'),
      endAt: new Date('2023-04-30T21:00:00Z'),
      location: 'TIM Park, Jakarta, Indonesia',
      price: 235,
      category: 'Music',
      picture: '/images/event-photos/event-photo-1.jpg',
    },
    {
      id: '2',
      name: 'Food Festival Years Indo',
      startAt: new Date('2023-01-21T09:00:00Z'),
      endAt: new Date('2023-01-21T20:00:00Z'),
      location: 'Jakarta, Indonesia',
      price: 23,
      category: 'Food',
      picture: '/images/event-photos/event-photo-2.jpg',
    }
  ];

  // Special events data 
  const specialEvents = [
    {
      id: '3',
      name: 'Concert Westlife',
      startAt: new Date('2023-02-21T18:30:00Z'),
      endAt: new Date('2023-02-21T22:00:00Z'),
      location: 'Jakarta, Indonesia',
      category: 'Music',
      picture: '/images/event-photos/event-photo-3.jpg',
    },
    {
      id: '4',
      name: 'Padang Food Festival',
      startAt: new Date('2023-01-21T10:00:00Z'),
      endAt: new Date('2023-01-21T21:00:00Z'),
      location: 'Jakarta, Indonesia',
      category: 'Food',
      picture: '/images/event-photos/event-photo-4.jpg',
    },
    {
      id: '5',
      name: 'Clouds Music Indofest',
      startAt: new Date('2023-01-21T14:00:00Z'),
      endAt: new Date('2023-01-21T23:59:00Z'),
      location: 'Jakarta, Indonesia',
      category: 'Music',
      picture: '/images/event-photos/event-photo-5.jpg',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-4 pt-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-500">Eventrue</h1>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          size="sm"
          src="/images/user-avatar.png"
        />
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-4">
        <Input
          type="search"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          startContent={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
          endContent={
            <Button 
              isIconOnly 
              variant="light" 
              color="primary" 
              onPress={onOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </Button>
          }
          className="w-full"
        />
      </div>

      {/* Filters Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Search Filters</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-semibold mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {['Music', 'Food', 'Sports', 'Arts', 'Technology'].map((cat) => (
                    <Chip 
                      key={cat} 
                      variant="bordered" 
                      color="primary"
                      className="cursor-pointer"
                    >
                      {cat}
                    </Chip>
                  ))}
                </div>
              </div>
              <Divider />
              <div>
                <h3 className="text-md font-semibold mb-2">Date</h3>
                <Input 
                  type="date" 
                  label="Event Date" 
                  className="max-w-xs" 
                />
              </div>
              <Divider />
              <div>
                <h3 className="text-md font-semibold mb-2">Location</h3>
                <Input 
                  type="text" 
                  label="City or Region" 
                  className="w-full" 
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={onClose}>
              Apply Filters
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Featured Events Section */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Featured Events</h2>
          <Link href="/events" className="text-sm text-primary-500">View All</Link>
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-4">
          {featuredEvents.map((event) => (
            <div key={event.id} className="min-w-64 flex-shrink-0">
              <EventCard
                id={event.id}
                name={event.name}
                startAt={event.startAt}
                endAt={event.endAt}
                location={event.location}
                price={event.price}
                category={event.category}
                picture={event.picture}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Special Events Section */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Special Events</h2>
          <Link href="/events" className="text-sm text-primary-500">View All</Link>
        </div>

        {specialEvents.map((event) => (
          <Card 
            key={event.id} 
            className="w-full mb-4"
            isPressable 
            onPress={() => window.location.href = `/events/${event.id}`}
          >
            <CardBody className="flex flex-row items-center p-3">
              <div className="w-24 h-24 relative mr-4">
                <Image 
                  src={event.picture} 
                  alt={event.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <Chip 
                  color={
                    event.category === 'Food' ? 'success' :
                    event.category === 'Music' ? 'secondary' :
                    event.category === 'Sports' ? 'warning' : 'primary'
                  } 
                  variant="flat" 
                  size="sm"
                  className="mb-2"
                >
                  {event.category}
                </Chip>
                <h3 className="font-semibold">{event.name}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.startAt.toLocaleDateString()}
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Categories Section */}
      <div className="px-4 mt-6 mb-20">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Categories</h2>
          <Link href="/categories" className="text-sm text-primary-500">View All</Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: 'Music', icon: '🎵', color: 'primary' },
            { name: 'Food', icon: '🍔', color: 'success' },
            { name: 'Sports', icon: '⚽', color: 'warning' },
            { name: 'Arts', icon: '🎨', color: 'secondary' },
            { name: 'Tech', icon: '💻', color: 'danger' },
            { name: 'Outdoor', icon: '🏕️', color: 'default' }
          ].map((category) => (
            <Button 
              key={category.name}
              variant="flat"
              color={category.color as any}
              className="flex flex-col items-center justify-center h-24"
              as={Link}
              href={`/categories/${category.name.toLowerCase()}`}
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-xs">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </div>
          
          <Link href="/events" className="flex flex-col items-center text-gray-500">
            <Badge content="3" color="danger" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Badge>
            <span className="text-xs mt-1">Events</span>
          </Link>
          
          <Link href="/discover" className="flex flex-col items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01.707-7.07m-.707 7.07l-1.414 1.414M7.05 4.05A9 9 0 0119.95 16.95M7.05 4.05l-1.414 1.414" />
            </svg>
            <span className="text-xs mt-1">Discover</span>
          </Link>
          
          <Link href="/profile" className="flex flex-col items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}