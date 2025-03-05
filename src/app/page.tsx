"use client"
// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Input, 
  Card, 
  CardHeader, 
  CardBody, 
  Button,
  Chip
} from "@heroui/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Search bar with HeroUI Input */}
      <div className="max-w-md mx-auto pt-4 px-4">
        <Input
          type="search" 
          placeholder="Rechercher un événement politique" 
          radius="full"
          startContent={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          }
        />
      </div>

      {/* Events For You Section */}
      <div className="mt-6 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Événements pour vous</h2>
          <Link href="/events" className="text-sm text-primary-500">Voir Plus</Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Event Card 1 using HeroUI Card */}
          <Card 
            isPressable 
            shadow="sm"
            onPress={() => window.location.href = '/events/1'}
          >
            <CardHeader className="p-0">
              <div className="relative h-36 w-full">
                <Image 
                  src="/images/political-event-1.jpg" 
                  alt="Débat politique"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 m-2">
                  <Button 
                    isIconOnly 
                    size="sm"
                    variant="flat" 
                    color="default" 
                    className="bg-white/80"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody className="p-3">
              <h3 className="font-semibold text-sm mb-1">Grand Débat National</h3>
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-gray-500">15 Avril 2023</p>
              </div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xs text-gray-500">Paris, France</p>
              </div>
              <Chip color="primary" size="sm" variant="flat">Gratuit</Chip>
            </CardBody>
          </Card>

          {/* Event Card 2 using HeroUI Card */}
          <Card 
            isPressable 
            shadow="sm"
            onPress={() => window.location.href = '/events/2'}
          >
            <CardHeader className="p-0">
              <div className="relative h-36 w-full">
                <Image 
                  src="/images/political-event-2.jpg" 
                  alt="Forum citoyen"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 m-2">
                  <Button 
                    isIconOnly 
                    size="sm"
                    variant="flat" 
                    color="default" 
                    className="bg-white/80"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </Button>
                </div>
                <div className="absolute top-0 left-0 m-2">
                  <Chip 
                    size="sm" 
                    variant="flat" 
                    color="primary" 
                    startContent={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    }
                  >
                    En direct
                  </Chip>
                </div>
              </div>
            </CardHeader>
            <CardBody className="p-3">
              <h3 className="font-semibold text-sm mb-1">Forum Citoyen</h3>
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-gray-500">28 Avril 2023</p>
              </div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xs text-gray-500">Lyon, France</p>
              </div>
              <Chip color="primary" size="sm" variant="flat">Gratuit</Chip>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Special Events Section */}
      <div className="mt-6 px-4 pb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Événements Spéciaux</h2>
          <Link href="/events" className="text-sm text-primary-500">Voir Plus</Link>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {/* Event Item 1 using HeroUI Card */}
          <Card shadow="sm" isPressable onPress={() => window.location.href = '/events/3'}>
            <CardBody className="p-0">
              <div className="flex">
                <div className="w-24 h-24 bg-primary-100 flex-shrink-0 relative">
                  <Image 
                    src="/images/political-event-3.jpg" 
                    alt="Conférence environnementale"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 flex-1">
                  <Chip color="success" size="sm" variant="flat" className="mb-1">Environnement</Chip>
                  <h3 className="font-semibold text-sm mb-1">Conférence Climat</h3>
                  <div className="flex items-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-gray-500">12 Mai 2023</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xs text-gray-500">Bordeaux, France</p>
                  </div>
                </div>
                <div className="p-3 flex flex-col items-end justify-between">
                  <Chip color="primary" size="sm" variant="flat">Gratuit</Chip>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Event Item 2 using HeroUI Card */}
          <Card shadow="sm" isPressable onPress={() => window.location.href = '/events/4'}>
            <CardBody className="p-0">
              <div className="flex">
                <div className="w-24 h-24 bg-primary-100 flex-shrink-0 relative">
                  <Image 
                    src="/images/political-event-4.jpg" 
                    alt="Sommet économique"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 flex-1">
                  <Chip color="warning" size="sm" variant="flat" className="mb-1">Économie</Chip>
                  <h3 className="font-semibold text-sm mb-1">Sommet Économique</h3>
                  <div className="flex items-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-gray-500">20 Mai 2023</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xs text-gray-500">Marseille, France</p>
                  </div>
                </div>
                <div className="p-3 flex flex-col items-end justify-between">
                  <Chip color="danger" size="sm" variant="flat">Sur invitation</Chip>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Event Item 3 using HeroUI Card */}
          <Card shadow="sm" isPressable onPress={() => window.location.href = '/events/5'}>
            <CardBody className="p-0">
              <div className="flex">
                <div className="w-24 h-24 bg-primary-100 flex-shrink-0 relative">
                  <Image 
                    src="/images/political-event-5.jpg" 
                    alt="Forum jeunesse"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 flex-1">
                  <Chip color="secondary" size="sm" variant="flat" className="mb-1">Jeunesse</Chip>
                  <h3 className="font-semibold text-sm mb-1">Forum Jeunesse</h3>
                  <div className="flex items-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-gray-500">25 Mai 2023</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xs text-gray-500">Toulouse, France</p>
                  </div>
                </div>
                <div className="p-3 flex flex-col items-end justify-between">
                  <Chip color="primary" size="sm" variant="flat">Gratuit</Chip>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Navigation Bar using HeroUI Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around items-center">
          <Button 
            href="/"
            as={Link}
            variant="light" 
            color="primary"
            className="flex flex-col items-center h-auto p-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Accueil</span>
          </Button>
          
          <Button 
            href="/events"
            as={Link}
            variant="light" 
            color="default"
            className="flex flex-col items-center h-auto p-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-xs mt-1">Événements</span>
          </Button>
          
          <Button 
            variant="light" 
            color="default"
            className="flex flex-col items-center h-auto p-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01.707-7.07m-.707 7.07l-1.414 1.414M7.05 4.05A9 9 0 0119.95 16.95M7.05 4.05l-1.414 1.414" />
            </svg>
            <span className="text-xs mt-1">Découvrir</span>
          </Button>
          
          <Button 
            variant="light" 
            color="default"
            className="flex flex-col items-center h-auto p-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profil</span>
          </Button>
        </div>
      </div>
    </div>
  );
}