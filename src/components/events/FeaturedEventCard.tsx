// src/components/events/FeaturedEventCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from '@heroui/react';

interface FeaturedEventProps {
  id: string;
  name: string;
  date: string;
  location: string;
  free?: boolean;
  live?: boolean;
  image: string;
  category?: string;
  onClick?: (id: string) => void;
}

const FeaturedEventCard: React.FC<FeaturedEventProps> = ({
  id,
  name,
  date,
  location,
  free = false,
  live = false,
  image,
  category,
  onClick = (id) => (window.location.href = `/events/${id}`),
}) => {
  return (
    <Card key={id} isPressable onPress={() => onClick(id)} className="w-64 flex-shrink-0">
      <CardHeader className="p-0 relative">
        <Image
          src={image}
          alt={name}
          width={256}
          height={160}
          className="object-cover w-full h-40"
        />
        <Button
          isIconOnly
          size="sm"
          variant="flat"
          color="default"
          className="absolute top-2 right-2 bg-white/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
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
        </Button>
        {live && (
          <Chip color="warning" variant="solid" size="sm" className="absolute bottom-2 left-2">
            En direct
          </Chip>
        )}
      </CardHeader>
      <CardBody>
        <h3 className="font-semibold">{name}</h3>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
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
            className="h-4 w-4 mr-1"
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
      </CardBody>
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          {free && (
            <Chip color="primary" variant="flat" size="sm">
              Gratuit
            </Chip>
          )}
          {category && (
            <Chip color="secondary" variant="flat" size="sm">
              {category}
            </Chip>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeaturedEventCard;
