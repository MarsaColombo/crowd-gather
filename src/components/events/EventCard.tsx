// src/components/events/EventCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Button, 
  Chip,
} from "@heroui/react";

interface EventCardProps {
  id: string;
  name: string;
  description?: string;
  picture?: string;
  startAt: Date;
  endAt: Date;
  location?: string;
  price?: number;
  category?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  picture = "/images/default-event.jpg",
  startAt,
  endAt,
  location = "Location not specified",
  price,
  category,
}) => {
  // Format date for display
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };
  
  // Extract day and month for the badge
  const getEventDay = () => {
    return startAt.getDate();
  };
  
  const getEventMonth = () => {
    return new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(startAt).toUpperCase();
  };

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card 
        className="w-full" 
        isPressable 
        onPress={() => window.location.href = `/events/${id}`}
        shadow="sm"
      >
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={picture}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            {/* Favorite Button */}
            <div className="absolute top-2 right-2">
              <Button 
                isIconOnly 
                size="sm" 
                variant="flat" 
                color="default" 
                className="bg-white/80 hover:bg-white"
                onClick={(e) => {
                  e.stopPropagation();
                  // Favorite logic would go here
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Button>
            </div>
            
            {/* Date Badge */}
            <div className="absolute top-3 left-3">
              <Chip
                size="sm"
                color="secondary"
                variant="solid"
                className="font-bold"
              >
                {getEventDay()} {getEventMonth()}
              </Chip>
            </div>
            
            {/* Category or Price Badge */}
            {category && (
              <div className="absolute bottom-3 left-3">
                <Chip
                  size="sm"
                  color="primary"
                  variant="solid"
                >
                  {category}
                </Chip>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardBody>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{name}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{formatDate(startAt)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        </CardBody>
        
        <CardFooter className="flex justify-between items-center">
          {price !== undefined && (
            <span className="font-bold text-lg text-primary-500">${price}</span>
          )}
          <Link href={`/events/${id}`} className="text-primary-500 font-medium text-sm">
            View Details
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EventCard;