// src/components/events/EventsSection.tsx
'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

interface EventsSectionProps {
  title: any;
  viewAllLink: string;
  viewAllText?: string;
  children: ReactNode;
}

const EventsSection: React.FC<EventsSectionProps> = ({
  title,
  viewAllLink,
  viewAllText = 'Voir Plus',
  children,
}) => {
  return (
    <div className="px-4 mt-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-bold">{title}</h2>
        <Link href={viewAllLink} className="text-sm text-primary-500">
          {viewAllText}
        </Link>
      </div>
      {children}
    </div>
  );
};

export default EventsSection;
