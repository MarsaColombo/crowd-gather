// src/components/events/UpcomingEventCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardBody } from '@heroui/react';

interface UpcomingEventProps {
  id: string;
  name: string;
  date: string;
  location: string;
  image: string;
  onClick?: (id: string) => void;
}

const UpcomingEventCard: React.FC<UpcomingEventProps> = ({
  id,
  name,
  date,
  location,
  image,
  onClick = (id) => (window.location.href = `/events/${id}`),
}) => {
  return (
    <Card key={id} isPressable onPress={() => onClick(id)} className="w-full mb-4">
      <CardBody className="flex flex-row items-center p-3">
        <div className="w-20 h-20 mr-4 relative">
          <Image src={image} alt={name} fill className="object-cover rounded-lg" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">{name}</h3>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
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
            {date}
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
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
            {location}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UpcomingEventCard;
