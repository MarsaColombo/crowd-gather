// src/components/events/EventDetailMap.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface EventDetailMapProps {
  coordinates: [number, number]; // [longitude, latitude]
  eventName: string;
}

const EventDetailMap: React.FC<EventDetailMapProps> = ({ coordinates, eventName }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [longitude, latitude] = coordinates;

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current) {
      // Initialize map with Leaflet
      const map = L.map(mapRef.current).setView([latitude, longitude], 15);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Create custom marker icon
      const defaultIcon = L.icon({
        iconUrl: '/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: '/images/marker-shadow.png',
        shadowSize: [41, 41]
      });

      // Add marker at event location
      const marker = L.marker([latitude, longitude], { icon: defaultIcon }).addTo(map);
      
      // Add popup with event name
      marker.bindPopup(`<b>${eventName}</b>`).openPopup();

      // Clean up on component unmount
      return () => {
        map.remove();
      };
    }
  }, [latitude, longitude, eventName]);

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div ref={mapRef} className="h-72 w-full" />
    </div>
  );
};

export default EventDetailMap;