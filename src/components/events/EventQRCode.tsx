// src/components/events/EventQRCode.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface EventQRCodeProps {
  eventId: string;
  eventName: string;
}

const EventQRCode: React.FC<EventQRCodeProps> = ({ eventId, eventName }) => {
  const [qrUrl, setQrUrl] = useState<string>('');

  useEffect(() => {
    // In production, you would use the QRCode API to generate the code
    // For now, we'll simulate a delay and use a static image
    const timer = setTimeout(() => {
      // Simulated URL - in a real implementation, this would be generated server-side
      setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://eventrue.com/events/${eventId}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [eventId]);

  if (!qrUrl) {
    return (
      <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg mx-auto"></div>
    );
  }

  return (
    <div className="text-center">
      <div className="p-4 bg-white rounded-lg inline-block shadow-sm mx-auto">
        <Image 
          src={qrUrl}
          alt={`QR Code pour l'événement ${eventName}`}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      <div className="mt-6 text-sm text-gray-600 max-w-xs mx-auto">
        <p>Scannez ce code pour accéder à la page de l&apos;événement et le partager avec vos contacts.</p>
        <p className="mt-2 text-primary-500 font-medium">Participez à notre rassemblement politique !</p>
      </div>
    </div>
  );
};

export default EventQRCode;