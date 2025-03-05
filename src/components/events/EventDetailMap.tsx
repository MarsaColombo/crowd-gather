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
      const map = L.map(mapRef.current).setView([latitude, longitude], 13);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add marker at event location with custom icon for political events
      const politicalIcon = L.icon({
        iconUrl: '/images/political-marker.png', // You'll need to add this image to your public folder
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      // Fallback to default marker if custom icon fails to load
      const marker = L.marker([latitude, longitude], {
        icon: politicalIcon
      }).addTo(map);
      
      marker.bindPopup(`<b>${eventName}</b>`).openPopup();

      // Clean up on component unmount
      return () => {
        map.remove();
      };
    }
  }, [latitude, longitude, eventName]);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      <div ref={mapRef} className="h-64 w-full" />
    </div>
  );
};

export default EventDetailMap;