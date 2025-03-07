// src/components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Input, 
  Button, 
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Chip,
  useDisclosure
} from "@heroui/react";

interface NavbarProps {
  showSearch?: boolean;
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  showSearch = true,
  title = "Eventrue"
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="px-4 pt-4 flex justify-between items-center">
        <Link className="text-2xl font-bold text-primary-500" href={"/"}>{title}</Link>
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
      {showSearch && (
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
      )}

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
    </div>
  );
};

export default Navbar;