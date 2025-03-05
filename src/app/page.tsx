"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Input, 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Divider,
  Badge,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@heroui/react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Political events data 
  const eventsForYou = [
    {
      id: '1',
      name: 'Grand Débat National',
      date: '15 Avril 2025',
      location: 'Paris, France',
      free: true,
      image: '/images/political-event-1.jpg',
      live: false,
      category: 'Démocratie'
    },
    {
      id: '2',
      name: 'Forum Citoyen',
      date: '28 Avril 2025',
      location: 'Lyon, France',
      free: true,
      image: '/images/political-event-2.jpg',
      live: true,
      category: 'Participation'
    }
  ];

  const specialEvents = [
    {
      id: '3',
      name: 'Conférence Climat',
      category: 'Environnement',
      date: '12 Mai 2025',
      location: 'Bordeaux, France',
      free: true,
      image: '/images/political-event-3.jpg'
    },
    {
      id: '4',
      name: 'Sommet Économique',
      category: 'Économie',
      date: '20 Mai 2025',
      location: 'Marseille, France',
      invitation: true,
      image: '/images/political-event-4.jpg'
    },
    {
      id: '5',
      name: 'Forum Jeunesse',
      category: 'Jeunesse',
      date: '25 Mai 2025',
      location: 'Toulouse, France',
      free: true,
      image: '/images/political-event-5.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Profile Dropdown */}
      <div className="px-4 pt-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-500">Eventrue</h1>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              size="sm"
              src="/images/user-avatar.png"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Connecté en tant que</p>
              <p className="font-semibold text-primary-500">utilisateur@eventrue.com</p>
            </DropdownItem>
            <DropdownItem key="settings" as={Link} href="/profile">
              Mon Profil
            </DropdownItem>
            <DropdownItem key="events" as={Link} href="/my-events">
              Mes Événements
            </DropdownItem>
            <DropdownItem key="help" as={Link} href="/help">
              Aide & Support
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Se Déconnecter
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-4">
        <Input
          type="search"
          placeholder="Rechercher un événement politique"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          startContent={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
          endContent={
            <Button 
              isIconOnly 
              variant="light" 
              color="primary" 
              onPress={onOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </Button>
          }
          className="w-full"
        />
      </div>

      {/* Filters Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Filtres de Recherche</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-semibold mb-2">Catégories</h3>
                <div className="flex flex-wrap gap-2">
                  {['Démocratie', 'Environnement', 'Économie', 'Social', 'Jeunesse'].map((cat) => (
                    <Chip 
                      key={cat} 
                      variant="bordered" 
                      color="primary"
                      className="cursor-pointer"
                    >
                      {cat}
                    </Chip>
                  ))}
                </div>
              </div>
              <Divider />
              <div>
                <h3 className="text-md font-semibold mb-2">Date</h3>
                <Input 
                  type="date" 
                  label="Date de l'événement" 
                  className="max-w-xs" 
                />
              </div>
              <Divider />
              <div>
                <h3 className="text-md font-semibold mb-2">Localisation</h3>
                <Input 
                  type="text" 
                  label="Ville ou Région" 
                  className="w-full" 
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Annuler
            </Button>
            <Button color="primary" onPress={onClose}>
              Appliquer les Filtres
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Events for You Section */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-bold">Événements pour vous</h2>
          <Link href="/events" className="text-sm text-primary-500">Voir Plus</Link>
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-2">
          {eventsForYou.map((event) => (
            <Card 
              key={event.id} 
              isPressable 
              onPress={() => window.location.href = `/events/${event.id}`}
              className="w-64 flex-shrink-0"
            >
              <CardHeader className="p-0 relative">
                <Image 
                  src={event.image} 
                  alt={event.name}
                  width={256}
                  height={160}
                  className="object-cover w-full h-40"
                />
                <Button 
                  isIconOnly 
                  size="sm" 
                  variant="flat" 
                  color="default" 
                  className="absolute top-2 right-2 bg-white/80"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </Button>
                {event.live && (
                  <Chip 
                    color="warning" 
                    variant="solid" 
                    size="sm" 
                    className="absolute bottom-2 left-2"
                  >
                    En direct
                  </Chip>
                )}
              </CardHeader>
              <CardBody>
                <h3 className="font-semibold">{event.name}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  {event.free && (
                    <Chip color="primary" variant="flat" size="sm">
                      Gratuit
                    </Chip>
                  )}
                  <Chip color="secondary" variant="flat" size="sm">
                    {event.category}
                  </Chip>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Special Events Section */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-bold">Événements Spéciaux</h2>
          <Link href="/events/special" className="text-sm text-primary-500">Voir Plus</Link>
        </div>

        {specialEvents.map((event) => (
          <Card 
            key={event.id} 
            className="w-full mb-4"
            isPressable 
            onPress={() => window.location.href = `/events/${event.id}`}
          >
            <CardBody className="flex flex-row items-center p-3">
              <div className="w-24 h-24 relative mr-4">
                <Image 
                  src={event.image} 
                  alt={event.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <Chip 
                  color={
                    event.category === 'Environnement' ? 'success' :
                    event.category === 'Économie' ? 'warning' :
                    event.category === 'Jeunesse' ? 'danger' : 'primary'
                  } 
                  variant="flat" 
                  size="sm"
                  className="mb-2"
                >
                  {event.category}
                </Chip>
                <h3 className="font-semibold text-sm">{event.name}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                <div className="mt-2">
                  {event.free && (
                    <Chip color="primary" variant="flat" size="sm" className="mr-2">
                      Gratuit
                    </Chip>
                  )}
                  {event.invitation && (
                    <Chip color="danger" variant="flat" size="sm">
                      Sur invitation
                    </Chip>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Categories Section */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-bold">Catégories</h2>
          <Link href="/categories" className="text-sm text-primary-500">Voir Plus</Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: 'Démocratie', icon: '🗳️', color: 'primary' },
            { name: 'Environnement', icon: '🌍', color: 'success' },
            { name: 'Social', icon: '👥', color: 'secondary' },
            { name: 'Économie', icon: '💼', color: 'warning' },
            { name: 'Droits', icon: '✊', color: 'danger' },
            { name: 'Régional', icon: '🏛️', color: 'default' }
          ].map((category) => (
            <Button 
              key={category.name}
              variant="flat"
              color={category.color as any}
              className="flex flex-col items-center justify-center h-24"
              as={Link}
              href={`/categories/${category.name.toLowerCase()}`}
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span className="text-xs">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="px-4 mt-4 mb-20">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-bold">Événements à venir</h2>
          <Link href="/events/upcoming" className="text-sm text-primary-500">Tout voir</Link>
        </div>
        {[
          {
            id: '6',
            name: 'Conférence sur la Transition Écologique',
            date: '15 Juin 2025',
            location: 'Nantes, France',
            image: '/images/political-event-6.jpg'
          },
          {
            id: '7',
            name: 'Forum National de la Jeunesse',
            date: '22 Juin 2025',
            location: 'Strasbourg, France',
            image: '/images/political-event-7.jpg'
          }
        ].map((event) => (
          <Card 
            key={event.id} 
            isPressable 
            onPress={() => window.location.href = `/events/${event.id}`}
            className="w-full mb-4"
          >
            <CardBody className="flex flex-row items-center p-3">
              <div className="w-20 h-20 mr-4 relative">
                <Image 
                  src={event.image} 
                  alt={event.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{event.name}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Accueil</span>
          </Link>
          
          <Link href="/events" className="flex flex-col items-center text-gray-500 relative">
            <Badge content="3" color="danger" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Badge>
            <span className="text-xs mt-1">Événements</span>
          </Link>
          
          <Link href="/discover" className="flex flex-col items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01.707-7.07m-.707 7.07l-1.414 1.414M7.05 4.05A9 9 0 0119.95 16.95M7.05 4.05l-1.414 1.414" />
            </svg>
            <span className="text-xs mt-1">Découvrir</span>
          </Link>
          
          <Link href="/profile" className="flex flex-col items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}