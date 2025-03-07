// src/components/events/EventDetailComponent.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Button,
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Tabs,
  Tab,
  Chip,
  Tooltip,
} from '@heroui/react';
import EventDetailMap from './EventDetailMap';
import { EventCameraButton } from './EventCameraButton';
import EventQRCode from './EventQRCode';
import EventPhotosGallery from './EventPhotosGallery';

interface EventDetailProps {
  event: {
    id: string;
    name: string;
    description: string;
    picture: string;
    address: {
      type: string;
      coordinates: [number, number];
    };
    startAt: string;
    endAt: string;
    createdAt: string;
  };
  photos: {
    id: string;
    url: string;
    uploadedAt: string;
  }[];
}

const EventDetailComponent: React.FC<EventDetailProps> = ({ event, photos }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'photos' | 'map' | 'qrcode'>('about');

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Extract month and day for the badge
  const getEventDay = (dateString: string) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const getEventMonth = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(date).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative">
        {/* Image placeholder or actual image */}
        <div className="h-80 bg-primary-100 relative">
          {event.picture ? (
            <Image
              src={event.picture}
              alt={event.name}
              fill
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary-100"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Back button */}
        <Link
          href="/events"
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>

        {/* Favorite button */}
        <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Event tag - Using political theme colors */}
        <div className="absolute top-24 left-4 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-md">
          {getEventDay(event.startAt)} {getEventMonth(event.startAt)}
        </div>
      </div>

      {/* Event Content */}
      <div className="relative -mt-8 bg-white rounded-t-3xl px-4 pt-6">
        <h1 className="text-2xl font-bold mb-2">{event.name}</h1>

        {/* Date and Time with HeroUI Chips and Tooltips */}
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <Tooltip content={`Du ${formatDate(event.startAt)} au ${formatDate(event.endAt)}`}>
            <Chip
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
              variant="flat"
              color="primary"
            >
              {formatDate(event.startAt)}
            </Chip>
          </Tooltip>

          <Tooltip content={`De ${formatTime(event.startAt)} à ${formatTime(event.endAt)}`}>
            <Chip
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              variant="flat"
              color="secondary"
            >
              {formatTime(event.startAt)} - {formatTime(event.endAt)}
            </Chip>
          </Tooltip>

          <Tooltip content="Ajouter à votre calendrier">
            <Chip
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              }
              variant="flat"
              color="success"
              className="cursor-pointer"
            >
              Ajouter
            </Chip>
          </Tooltip>
        </div>

        {/* Location with HeroUI Chip */}
        <div className="mb-6">
          <Tooltip content="Voir sur la carte">
            <Chip
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              variant="bordered"
              color="default"
              className="cursor-pointer"
              onClick={() => setActiveTab('map')}
            >
              {event.address ? 'Paris, France' : 'Lieu à confirmer'}
            </Chip>
          </Tooltip>
        </div>

        {/* Tab Navigation using HeroUI Tabs */}
        <Tabs
          aria-label="Options"
          variant="underlined"
          color="primary"
          classNames={{
            base: 'w-full',
            tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
            cursor: 'w-full bg-primary',
            tab: 'max-w-fit px-0 h-12',
            tabContent: 'group-data-[selected=true]:text-primary',
          }}
          onSelectionChange={(key) =>
            setActiveTab(key.toString() as 'about' | 'photos' | 'map' | 'qrcode')
          }
          selectedKey={activeTab}
        >
          <Tab
            key="about"
            title={
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>À propos</span>
              </div>
            }
          />
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4h16M4 20h16"
                  />
                </svg>
                <span>Photos</span>
              </div>
            }
          />
          <Tab
            key="map"
            title={
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <span>Carte</span>
              </div>
            }
          />
          <Tab
            key="qrcode"
            title={
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
                <span>QR Code</span>
              </div>
            }
          />
        </Tabs>

        {/* Tab Content */}
        <div className="mb-20 mt-4">
          {activeTab === 'about' && (
            <div>
              {/* Description with HeroUI Accordion */}
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2">À propos de l&apos;événement</h2>
                <Accordion variant="bordered" className="mt-4">
                  <AccordionItem key="1" title="Description" subtitle="Détails de l'événement">
                    <p className="text-gray-600">{event.description}</p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    title="Programme"
                    subtitle="Déroulement de l'événement"
                    startContent={
                      <div className="bg-primary-100 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-primary-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    }
                  >
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary-500 font-medium">18:00</span>
                        <span>Accueil des participants</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary-500 font-medium">18:30</span>
                        <span>Ouverture du débat</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary-500 font-medium">19:30</span>
                        <span>Questions du public</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary-500 font-medium">20:30</span>
                        <span>Conclusion et networking</span>
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    title="Organisateurs"
                    subtitle="Équipe responsable"
                    startContent={
                      <div className="bg-primary-100 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-primary-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                    }
                  >
                    <div className="space-y-3 text-gray-600">
                      <p>
                        <strong>Association des Citoyens Engagés</strong>
                      </p>
                      <p>
                        Organisation à but non lucratif visant à promouvoir l&apos;engagement
                        citoyen et la participation aux débats démocratiques.
                      </p>
                      <p>
                        <strong>Contact :</strong> contact@ace-democratie.org
                      </p>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Political Event packages - Using HeroUI Card */}
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-4">Options de participation</h2>

                {/* VIP Access Card */}
                <Card className="mb-4">
                  <CardBody className="flex justify-between items-center p-4">
                    <div className="flex items-center">
                      <div className="bg-primary-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold">Accès VIP</h3>
                        <p className="text-xs text-gray-500">
                          Accès privilégié, Rencontre avec les intervenants
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 line-through">Gratuit</div>
                      <div className="font-bold text-primary-500">Sur invitation</div>
                    </div>
                  </CardBody>
                </Card>

                {/* Standard Access Card */}
                <Card className="mb-4">
                  <CardBody className="flex justify-between items-center p-4">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold">Accès Standard</h3>
                        <p className="text-xs text-gray-500">Accès public, places limitées</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary-500">Gratuit</div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'photos' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Galerie photos</h2>
                <EventCameraButton eventId={event.id} />
              </div>
              <EventPhotosGallery photos={photos} />
            </div>
          )}

          {activeTab === 'map' && (
            <div className="h-64">
              <h2 className="text-lg font-bold mb-4">Lieu de l&apos;événement</h2>
              <EventDetailMap
                coordinates={event.address?.coordinates || [2.3522, 48.8566]}
                eventName={event.name}
              />
            </div>
          )}

          {activeTab === 'qrcode' && (
            <div className="text-center py-6">
              <h2 className="text-lg font-bold mb-6">
                Scannez ce code pour rejoindre l&apos;événement
              </h2>
              <EventQRCode eventId={event.id} eventName={event.name} />
              <p className="mt-6 text-sm text-gray-500">
                Partagez ce QR code pour inviter d&apos;autres personnes à rejoindre cet événement
                politique.
              </p>
            </div>
          )}
        </div>

        {/* Register Button with HeroUI Button */}
        <div className="fixed bottom-0 left-0 right-0 py-4 px-4 bg-white border-t border-gray-200 flex gap-2">
          <Button
            color="primary"
            variant="solid"
            size="lg"
            className="w-full"
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            }
          >
            S&apos;inscrire à l&apos;événement
          </Button>

          <Button color="default" variant="bordered" size="lg" isIconOnly aria-label="Partager">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailComponent;
