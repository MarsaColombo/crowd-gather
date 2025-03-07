// src/components/events/EventsSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';

interface EventsSectionProps {
  title: string;
  viewAllLink?: string;
  children: React.ReactNode;
}

const EventsSection: React.FC<EventsSectionProps> = ({ title, viewAllLink, children }) => {
  return (
    <section className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {viewAllLink && (
          <Button
            as={Link}
            href={viewAllLink}
            variant="light"
            color="primary"
            className="font-medium"
          >
            View All
          </Button>
        )}
      </div>
      {children}
    </section>
  );
};

export default EventsSection;
