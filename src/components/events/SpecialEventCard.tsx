// src/components/events/SpecialEventCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardBody, Chip } from "@heroui/react";

interface SpecialEventProps {
  id: string;
  name: string;
  date: string;
  location: string;
  category: string;
  image: string;
  free?: boolean;
  invitation?: boolean;
  onClick?: (id: string) => void;
}

const SpecialEventCard: React.FC<SpecialEventProps> = ({
  id,
  name,
  date,
  location,
  category,
  image,
  free = false,
  invitation = false,
  onClick = (id) => window.location.href = `/events/${id}`
}) => {
  // Déterminer la couleur de la catégorie
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Environnement': return 'success';
      case 'Économie': return 'warning';
      case 'Jeunesse': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <Card 
      key={id} 
      className="w-full mb-4"
      isPressable 
      onPress={() => onClick(id)}
    >
      <CardBody className="flex flex-row items-center p-3">
        <div className="w-24 h-24 relative mr-4">
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <Chip 
            color={getCategoryColor(category) as any}
            variant="flat" 
            size="sm"
            className="mb-2"
          >
            {category}
          </Chip>
          <h3 className="font-semibold text-sm">{name}</h3>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
          <div className="mt-2">
            {free && (
              <Chip color="primary" variant="flat" size="sm" className="mr-2">
                Gratuit
              </Chip>
            )}
            {invitation && (
              <Chip color="danger" variant="flat" size="sm">
                Sur invitation
              </Chip>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SpecialEventCard;