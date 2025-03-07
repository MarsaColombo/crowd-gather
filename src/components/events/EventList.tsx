// src/components/events/EventList.tsx
'use client';

import React, { useState } from 'react';
import { Card, CardBody, Button, Select, SelectItem, Pagination } from '@heroui/react';
import EventCard from './EventCard';
import { motion } from 'framer-motion';

export interface Event {
  id: string;
  name: string;
  description: string;
  picture: string | undefined;
  address: unknown;
  startAt: Date;
  endAt: Date;
}

interface EventListProps {
  events: Event[];
  loading?: boolean;
}

const EventList: React.FC<EventListProps> = ({ events, loading = false }) => {
  const [filter, setFilter] = useState('all'); // 'all', 'upcoming', 'past'
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Filter events
  const filteredEvents = events.filter((event) => {
    const now = new Date();
    if (filter === 'upcoming') {
      return new Date(event.startAt) > now;
    } else if (filter === 'past') {
      return new Date(event.endAt) < now;
    }
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  if (loading) {
    return (
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <svg
            className="animate-spin h-10 w-10 text-primary-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Chargement des événements...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Événements Politiques</h2>

        <div className="w-full sm:w-auto">
          <Select
            label="Filtrer par"
            selectedKeys={[filter]}
            onChange={(e) => setFilter(e.target.value)}
            classNames={{
              base: 'max-w-xs',
              trigger: 'h-10',
            }}
          >
            <SelectItem key="all">Tous les événements</SelectItem>
            <SelectItem key="upcoming">À venir</SelectItem>
            <SelectItem key="past">Passés</SelectItem>
          </Select>
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <Card className="w-full p-6 text-center">
          <CardBody className="flex flex-col items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Aucun événement trouvé
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {filter === 'upcoming'
                ? "Il n'y a pas d'événements politiques à venir pour le moment."
                : filter === 'past'
                  ? "Il n'y a pas d'événements politiques passés."
                  : "Aucun événement politique n'est disponible."}
            </p>
            <Button color="primary" className="mt-4">
              Créer un événement
            </Button>
          </CardBody>
        </Card>
      ) : (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paginatedEvents.map((event) => (
              <motion.div key={event.id} variants={item}>
                <EventCard
                  id={event.id}
                  name={event.name}
                  description={event.description}
                  picture={event.picture || '/images/default-event.jpg'}
                  startAt={event.startAt}
                  endAt={event.endAt}
                />
              </motion.div>
            ))}
          </motion.div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <Pagination
                total={totalPages}
                initialPage={1}
                page={page}
                onChange={setPage}
                showControls
                color="primary"
                variant="bordered"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EventList;
