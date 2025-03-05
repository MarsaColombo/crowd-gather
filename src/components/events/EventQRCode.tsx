// src/components/events/EventQRCode.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from "@heroui/react";

interface EventQRCodeProps {
  eventId: string;
  eventName: string;
}

const EventQRCode: React.FC<EventQRCodeProps> = ({ eventId, eventName }) => {
  const [qrUrl, setQrUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, you would generate the QR code server-side or use a library
    // For this example, we'll use an external API for generating QR codes
    const generateQRCode = async () => {
      setIsLoading(true);
      try {
        // Create a URL that includes the event ID
        const eventUrl = `https://eventrue.com/events/${eventId}`;
        
        // Use the QR Server API to generate a QR code
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(eventUrl)}`;
        
        setQrUrl(qrCodeUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      } finally {
        setIsLoading(false);
      }
    };

    generateQRCode();
  }, [eventId]);

  const shareEvent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventName,
          text: `Join me at ${eventName}!`,
          url: `https://eventrue.com/events/${eventId}`,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert(`Share this URL: https://eventrue.com/events/${eventId}`);
    }
  };

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `${eventName.replace(/\s+/g, '-').toLowerCase()}-qrcode.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center">
      {isLoading ? (
        <div className="w-48 h-48 bg-gray-200 animate-pulse rounded-lg"></div>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Image 
            src={qrUrl} 
            alt={`QR Code for ${eventName}`} 
            width={200} 
            height={200} 
            className="mx-auto"
          />
        </div>
      )}
      
      <p className="mt-4 text-center text-sm text-gray-600 max-w-xs">
        Scan this QR code with your camera to join the event or share it with others.
      </p>
      
      <div className="mt-6 flex gap-4">
        <Button 
          color="primary" 
          variant="flat" 
          startContent={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          }
          onPress={shareEvent}
        >
          Share
        </Button>
        <Button 
          color="default" 
          variant="flat" 
          startContent={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          }
          onPress={downloadQRCode}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default EventQRCode;