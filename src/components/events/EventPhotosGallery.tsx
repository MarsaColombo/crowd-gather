// src/components/events/EventPhotosGallery.tsx
"use client";

import React from 'react';
import Image from 'next/image';

interface Photo {
  id: string;
  url: string;
  uploadedAt: string;
}

interface EventPhotosGalleryProps {
  photos: Photo[];
}

const EventPhotosGallery: React.FC<EventPhotosGalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = React.useState<Photo | null>(null);

  if (photos.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Aucune photo n&apos;a encore été ajoutée pour cet événement.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Soyez le premier à capturer un moment de cet événement politique !
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
            className="aspect-square relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.url}
              alt={`Photo de l'événement ${photo.id}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying a photo in full size */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2"
              onClick={() => setSelectedPhoto(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-video w-full h-full">
              <Image
                src={selectedPhoto.url}
                alt={`Photo de l'événement ${selectedPhoto.id}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-4">
              <p className="text-sm">
                Ajoutée le {new Date(selectedPhoto.uploadedAt).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPhotosGallery;