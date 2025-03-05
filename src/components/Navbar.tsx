// src/components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Navbar as HeroUINavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar
} from "@heroui/react";

interface NavbarProps {
  title?: string;
  showBackButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  title = "Eventrue", 
  showBackButton = false 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="fixed top-0 left-0 right-0 z-50"
    >
      <NavbarContent>
        {showBackButton && (
          <Button
            isIconOnly
            variant="light"
            onClick={() => window.history.back()}
            aria-label="Retour"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        )}
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit text-primary-500">
            {title}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link 
            href="/events" 
            className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400"
          >
            Événements
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/about" 
            className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400"
          >
            À propos
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Button 
            as={Link} 
            href="/events/new" 
            color="primary" 
            variant="flat"
          >
            Créer un événement
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="US"
                size="sm"
                src="/images/user-avatar.png"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Connecté en tant que</p>
                <p className="font-semibold">utilisateur@exemple.fr</p>
              </DropdownItem>
              <DropdownItem key="settings">Mon profil</DropdownItem>
              <DropdownItem key="events">Mes événements</DropdownItem>
              <DropdownItem key="help_and_feedback">Aide & feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Se déconnecter
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="md:hidden"
        />
      </NavbarContent>
      
      <NavbarMenu>
        <NavbarMenuItem>
          <Link 
            href="/" 
            className="w-full text-base py-2 hover:text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            href="/events" 
            className="w-full text-base py-2 hover:text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Événements
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            href="/about" 
            className="w-full text-base py-2 hover:text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            as={Link} 
            href="/events/new" 
            color="primary" 
            variant="flat"
            className="mt-4 w-full"
          >
            Créer un événement
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;