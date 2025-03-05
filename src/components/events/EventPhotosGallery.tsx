// src/components/events/EventPhotosGallery.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Chip, Spinner } from "@heroui/react";

interface Photo {
  id: string;
  url: string;
  uploadedAt: string;
}

interface EventPhotosGalleryProps {
  photos: Photo[];
}

const EventPhotosGallery: React.FC<EventPhotosGalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const handleImageLoad = (id: string) => {
    setIsLoading(prev => ({ ...prev, [id]: false }));
  };

  const handleImageLoadStart = (id: string) => {
    setIsLoading(prev => ({ ...prev, [id]: true }));
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  if (photos.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          No photos have been added to this event yet.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Be the first to capture a moment at this event!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => handlePhotoClick(photo)}
            onMouseEnter={() => handleImageLoadStart(photo.id)}
          >
            {isLoading[photo.id] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <Spinner size="sm" color="primary" />
              </div>
            )}
            <Image
              src={photo.url}
              alt={`Event photo ${photo.id}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              onLoad={() => handleImageLoad(photo.id)}
            />
            <div className="absolute bottom-2 right-2 z-10">
              <Chip 
                size="sm" 
                variant="solid" 
                color="primary" 
                className="bg-primary-500/80 backdrop-blur-sm"
              >
                {new Date(photo.uploadedAt).toLocaleDateString()}
              </Chip>
            </div>
          </div>
        ))}
      </div>

      {/* Full-size Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
          onClick={closePhotoModal}
        >
          <div 
            className="relative max-w-4xl max-h-full" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2"
              onClick={closePhotoModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative aspect-video w-full">
              <Image
                src={selectedPhoto.url}
                alt={`Event photo ${selectedPhoto.id}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-4">
              <p className="text-sm">
                Added on {formatDate(selectedPhoto.uploadedAt)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPhotosGallery;