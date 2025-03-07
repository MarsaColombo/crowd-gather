// src/app/page.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BottomNavigation from '@/components/layout/BottomNavigation';
import FeaturedEventCard from '@/components/events/FeaturedEventCard';
import SpecialEventCard from '@/components/events/SpecialEventCard';
import UpcomingEventCard from '@/components/events/UpcomingEventCard';
import CategoryGrid from '@/components/categories/CategoryGrid';
import EventsSection from '@/components/events/EventsSection';
import { fetchEvents, fetchCategories, Event, Category } from '@/data/mockData';
import { Spinner } from "@heroui/react";

export default function Home() {
  // États pour stocker les données
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);
  const [specialEvents, setSpecialEvents] = useState<Event[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  
  // États pour les chargements
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [loadingSpecial, setLoadingSpecial] = useState(true);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // Récupérer les données au chargement de la page
  useEffect(() => {
    const loadData = async () => {
      try {
        // Charger les événements mis en avant
        setLoadingFeatured(true);
        const featured = await fetchEvents('featured');
        setFeaturedEvents(featured);
        setLoadingFeatured(false);
        
        // Charger les événements spéciaux
        setLoadingSpecial(true);
        const special = await fetchEvents('special');
        setSpecialEvents(special);
        setLoadingSpecial(false);
        
        // Charger les événements à venir
        setLoadingUpcoming(true);
        const upcoming = await fetchEvents('upcoming');
        setUpcomingEvents(upcoming);
        setLoadingUpcoming(false);
        
        // Charger les catégories
        setLoadingCategories(true);
        const cats = await fetchCategories();
        setCategories(cats);
        setLoadingCategories(false);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
        // Gérer les erreurs si nécessaire
        setLoadingFeatured(false);
        setLoadingSpecial(false);
        setLoadingUpcoming(false);
        setLoadingCategories(false);
      }
    };
    
    loadData();
  }, []);

  // Composant de chargement
  const LoadingIndicator = () => (
    <div className="flex justify-center items-center py-8">
      <Spinner color="primary" size="lg" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar title="Eventrue" />

      {/* Featured Events Section */}
      <EventsSection title="Événements pour vous" viewAllLink="/events">
        {loadingFeatured ? (
          <LoadingIndicator />
        ) : (
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {featuredEvents.map((event) => (
              <FeaturedEventCard
                key={event.id}
                id={event.id}
                name={event.name}
                date={event.date}
                location={event.location}
                free={event.free}
                live={event.live}
                image={event.image}
                category={event.category}
              />
            ))}
          </div>
        )}
      </EventsSection>

      {/* Special Events Section */}
      <EventsSection title="Événements Spéciaux" viewAllLink="/events/special">
        {loadingSpecial ? (
          <LoadingIndicator />
        ) : (
          specialEvents.map((event) => (
            <SpecialEventCard
              key={event.id}
              id={event.id}
              name={event.name}
              date={event.date}
              location={event.location}
              category={event.category || ''}
              image={event.image}
              free={event.free}
              invitation={event.invitation}
            />
          ))
        )}
      </EventsSection>

      {/* Categories Section */}
      <EventsSection title="Catégories" viewAllLink="/categories">
        {loadingCategories ? (
          <LoadingIndicator />
        ) : (
          <CategoryGrid categories={categories} />
        )}
      </EventsSection>

      {/* Upcoming Events Section */}
      <EventsSection 
        title="Événements à venir" 
        viewAllLink="/events/upcoming" 
        viewAllText="Tout voir"
      >
        {loadingUpcoming ? (
          <LoadingIndicator />
        ) : (
          upcomingEvents.map((event) => (
            <UpcomingEventCard
              key={event.id}
              id={event.id}
              name={event.name}
              date={event.date}
              location={event.location}
              image={event.image}
            />
          ))
        )}
      </EventsSection>

      {/* Bottom Navigation */}
      <div className="pb-20"></div>
      <BottomNavigation />
    </div>
  );
}