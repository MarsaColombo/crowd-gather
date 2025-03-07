'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Input,
  Button,
  Chip,
  Avatar,
  Divider,
  Badge,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@heroui/react';
import FeaturedEventCard from '@/components/events/FeaturedEventCard';
import SpecialEventCard from '@/components/events/SpecialEventCard';
import CategoryGrid from '@/components/categories/CategoryGrid';
import EventsSection from '@/components/events/EventsSection';
import type { Category } from '@/data/mockData';

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Featured events data
  const featuredEvents = [
    {
      id: '1',
      name: 'International Jazz Festival Jakarta 2023',
      date: '30 April 2023',
      location: 'TIM Park, Jakarta, Indonesia',
      free: false,
      image: '/images/event-photos/event-photo-1.jpg',
      category: 'Music',
      price: 235,
    },
    {
      id: '2',
      name: 'Food Festival Years Indo',
      date: '21 January 2023',
      location: 'Jakarta, Indonesia',
      free: false,
      image: '/images/event-photos/event-photo-2.jpg',
      category: 'Food',
      price: 23,
    },
  ];

  // Special events data
  const specialEvents = [
    {
      id: '3',
      name: 'Concert Westlife',
      date: '21 February 2023',
      location: 'Jakarta, Indonesia',
      category: 'Music',
      image: '/images/event-photos/event-photo-3.jpg',
    },
    {
      id: '4',
      name: 'Padang Food Festival',
      date: '21 January 2023',
      location: 'Jakarta, Indonesia',
      category: 'Food',
      image: '/images/event-photos/event-photo-4.jpg',
    },
    {
      id: '5',
      name: 'Clouds Music Indofest',
      date: '21 January 2023',
      location: 'Jakarta, Indonesia',
      category: 'Music',
      image: '/images/event-photos/event-photo-5.jpg',
    },
  ];

  // Categories
  const categories: Category[] = [
    { name: 'Music', icon: '🎵', color: 'primary' },
    { name: 'Food', icon: '🍔', color: 'success' },
    { name: 'Sports', icon: '⚽', color: 'warning' },
    { name: 'Arts', icon: '🎨', color: 'secondary' },
    { name: 'Tech', icon: '💻', color: 'danger' },
    { name: 'Outdoor', icon: '🏕️', color: 'primary' },
  ];

  // Handler pour le changement de recherche
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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
          onChange={handleSearchChange}
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          endContent={
            <Button isIconOnly variant="light" color="primary" onPress={onOpen}>
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
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
                    <Chip key={cat} variant="bordered" color="primary" className="cursor-pointer">
                      {cat}
                    </Chip>
                  ))}
                </div>
              </div>
              <Divider />
              <div>
                <h3 className="text-md font-semibold mb-2">Date</h3>
                <Input type="date" label="Event Date" className="max-w-xs" />
              </div>
              <Divider />
              <div>
                <h3 className="text-md font-semibold mb-2">Location</h3>
                <Input type="text" label="City or Region" className="w-full" />
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
      <EventsSection title="Featured Events" viewAllLink="/events">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {featuredEvents.map((event) => (
            <div key={event.id} className="min-w-64 flex-shrink-0">
              <FeaturedEventCard
                id={event.id}
                name={event.name}
                date={event.date}
                location={event.location}
                free={event.free}
                image={event.image}
                category={event.category}
              />
            </div>
          ))}
        </div>
      </EventsSection>

      {/* Special Events Section */}
      <EventsSection title="Special Events" viewAllLink="/events">
        {specialEvents.map((event) => (
          <SpecialEventCard
            key={event.id}
            id={event.id}
            name={event.name}
            date={event.date}
            location={event.location}
            category={event.category}
            image={event.image}
          />
        ))}
      </EventsSection>

      {/* Categories Section */}
      <EventsSection title="Categories" viewAllLink="/categories">
        <CategoryGrid categories={categories} />
      </EventsSection>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center text-primary-500">
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
          </div>

          <Link href="/events" className="flex flex-col items-center text-gray-500">
            <Badge content="3" color="danger" size="sm">
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
            </Badge>
            <span className="text-xs mt-1">Events</span>
          </Link>

          <Link href="/discover" className="flex flex-col items-center text-gray-500">
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
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01.707-7.07m-.707 7.07l-1.414 1.414M7.05 4.05A9 9 0 0119.95 16.95M7.05 4.05l-1.414 1.414"
              />
            </svg>
            <span className="text-xs mt-1">Discover</span>
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
