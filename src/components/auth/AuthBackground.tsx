// src/components/auth/AuthBackground.tsx
import React from 'react';
import Image from 'next/image';

interface AuthBackgroundProps {
  children: React.ReactNode;
  images?: Array<{id: string, image: string}>;
}

const AuthBackground: React.FC<AuthBackgroundProps> = ({ 
  children,
  images = [
    { id: '1', image: '/images/event-photos/event-photo-1.jpg' },
    { id: '2', image: '/images/event-photos/event-photo-2.jpg' },
    { id: '3', image: '/images/event-photos/event-photo-3.jpg' },
    { id: '4', image: '/images/event-photos/event-photo-4.jpg' },
    { id: '5', image: '/images/political-event-1.jpg' },
    { id: '6', image: '/images/political-event-2.jpg' }
  ] 
}) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Background patterns */}
      <div className="fixed inset-0 bg-auth-pattern opacity-10"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>

      {/* Event images in background */}
      <div className="fixed inset-0 events-grid opacity-10 z-0">
        {images.map((event) => (
          <div key={event.id} className="relative overflow-hidden rounded-lg">
            <Image 
              src={event.image} 
              alt="" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100px, 150px"
            />
          </div>
        ))}
      </div>
      
      {children}
      
      {/* Footer */}
      <footer className="py-4 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Eventrue. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthBackground;