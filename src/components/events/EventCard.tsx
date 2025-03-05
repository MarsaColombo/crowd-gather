// src/components/events/EventCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Button, 
  Chip,
  Divider,
} from "@heroui/react";

interface EventCardProps {
  id: string;
  name: string;
  description: string;
  picture?: string;
  startAt: Date;
  endAt: Date;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  description,
  picture = "/images/default-political-event.jpg",
  startAt,
}) => {
  // Format dates
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  // Limit description length
  const truncateDescription = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Extract month and day for the badge
  const getEventDay = () => {
    return startAt.getDate();
  };
  
  const getEventMonth = () => {
    return new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(startAt).toUpperCase();
  };
  
  // Determine if the event is upcoming
  const isUpcoming = () => {
    const now = new Date();
    return startAt > now;
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
            <div className="absolute top-2 right-2">
              <Button 
                isIconOnly 
                size="sm" 
                variant="flat" 
                color="default" 
                className="bg-white/80 hover:bg-white"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to favorites logic here
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <Chip
                size="sm"
                color="secondary"
                variant="solid"
              >
                {getEventDay()} {getEventMonth()}
              </Chip>
            </div>
          </div>
        </CardHeader>
        
        <CardBody>
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{name}</h3>
            {isUpcoming() && (
              <Chip
                size="sm"
                color="success"
                variant="flat"
              >
                À venir
              </Chip>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
            {truncateDescription(description)}
          </p>
        </CardBody>
        
        <Divider />
        
        <CardFooter className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span>{formatDate(startAt)}</span>
          <span className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Voir sur la carte
          </span>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EventCard;